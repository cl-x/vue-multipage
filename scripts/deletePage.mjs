/*
 * @Author       : 桔子
 * @Date         : 2024-04-08 16:29:27
 * @LastEditors  : 桔子
 * @LastEditTime : 2024-04-08 16:59:08
 * @Description  : 此文件为删除页面的脚本命令文件
 * @FilePath     : /vue-multipage/scripts/deletePage.mjs
 */
import chalk from 'chalk'
import path from 'path'
import fs from 'fs'

const resolve = (__dirname, ...file) => path.resolve(__dirname, ...file)
const log = (message) => console.log(chalk.green(`${message}`))
const successLog = (message) => console.log(chalk.blue(`${message}`))
const errorLog = (error) => console.log(chalk.red(`${error}`))
log('请输入要删除的"页面名称"、会在 /pages 目录下删除该页面相关的所有文件')

process.stdin.on('data', async (chunk) => {
  // 获取输入的信息
  const content = String(chunk).trim().toString()
  if (content == -1) {
    errorLog('格式错误，请重新输入')
    return
  }
  successLog(`将在 /pages 目录下删除 ${content} 文件夹以及${content}.html文件`)
  const targetPath = resolve('./pages', content)
  const targetEnterPath = resolve('./pages', `${content}.html`)

  // 判断同名文件夹是否存在
  const pageExists = fs.existsSync(targetPath)
  if (!pageExists) {
    errorLog('页面不存在，请重新输入')
    return
  }

  // 获取multiPages.json文件内容，获取当前已有的页面集合
  await fs.readFile(
    path.resolve('./scripts', 'multiPages.json'),
    'utf-8',
    async (err, data) => {
      //获取老数据
      let data_more = JSON.parse(data)
      //和老数据去重
      const index = data_more.findIndex((ele) => {
        return ele.chunk == content
      })

      if (index !== -1) {
        // 修改页面数据
        data_more = data_more.filter((item) => item.chunk !== content)
        await changePagesData(data_more)
        await setFile(data_more)
      }
    }
  )

  /**
   * 改变multiPages.json
   */
  function setFile(data_list) {
    // 通过writeFile改变数据内容
    fs.writeFile(
      path.resolve('./scripts', 'multiPages.json'),
      JSON.stringify(data_list),
      'utf-8',
      (err) => {
        if (err) throw err
        // 在pages目录下删除文件夹
        deleteFolder(targetPath)
        // 在pages目录下删除入口文件
        deleteEnterFile(targetEnterPath)
        process.stdin.emit('end')
      }
    )
  }

  /**
   * @Description: 改变底层入口html的数据
   * @param {*} data_list 新的页面数据
   * @return {*}
   */
  const changePagesData = async (data_list) => {
    await fs.writeFile(
      path.resolve('./pages', 'pagesData.json'),
      JSON.stringify(data_list),
      'utf-8',
      (err) => {
        if (err) throw err
      }
    )
  }
})

process.stdin.on('end', () => {
  console.log('exit')
  process.exit()
})

/**
 * @Description: 删除页面文件夹
 * @param {*} folderPath 路径
 * @return {*}
 */
const deleteFolder = (folderPath) => {
  if (fs.existsSync(folderPath)) {
    fs.readdirSync(folderPath).forEach((file) => {
      const curPath = path.join(folderPath, file)
      if (fs.lstatSync(curPath).isDirectory()) {
        // 递归删除子文件夹
        deleteFolder(curPath)
      } else {
        // 删除文件
        fs.unlinkSync(curPath)
      }
    })
    // 删除文件夹
    fs.rmdirSync(folderPath)
  }
}

/**
 * @Description: 删除入口文件
 * @param {*} filePath 路径
 * @return {*}
 */
const deleteEnterFile = (filePath) => {
  fs.unlink(filePath, (err) => {
    if (err) throw err
  })
}
