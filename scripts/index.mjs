import chalk from 'chalk'
import path from 'path'
import fs from 'fs'

const resolve = (__dirname, ...file) => path.resolve(__dirname, ...file)
const log = (message) => console.log(chalk.green(`${message}`))
const successLog = (message) => console.log(chalk.blue(`${message}`))
const errorLog = (error) => console.log(chalk.red(`${error}`))
log('请输入要生成的"页面名称:页面描述"、会生成在 /src/pages 目录下')
process.stdin.on('data', async (chunk) => {
  // 获取输入的信息
  const content = String(chunk).trim().toString()
  const inputSearch = content.search(':')
  if (inputSearch == -1) {
    errorLog('格式错误，请重新输入')
    return
  }
  // 拆分用户输入的名称和描述
  const inputName = content.split(':')[0]
  const inputDesc = content.split(':')[1] || inputName
  const isTs = process.env.npm_config_ts
  successLog(`将在 /src/pages 目录下创建 ${inputName} 文件夹`)
  const targetPath = resolve('./src/pages', inputName)
  // 判断同名文件夹是否存在
  const pageExists = fs.existsSync(targetPath)
  if (pageExists) {
    errorLog('页面已经存在，请重新输入')
    return
  }

  // 获取multiPages.json文件内容，获取当前已有的页面集合
  await fs.readFile(
    path.resolve('./scripts', 'multiPages.json'),
    'utf-8',
    async (err, data) => {
      //获取老数据
      const data_more = JSON.parse(data)
      //和老数据去重
      const index = data_more.findIndex((ele) => {
        return ele.chunk == inputName
      })

      if (index == -1) {
        //写入新页面的信息
        const obj = {
          chunk: inputName,
          chunkName: inputDesc
        }
        data_more.push(obj)
        await changePagesData(data_more)
        setFile(data_more)
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
        // 在pages中建立新的目录
        fs.mkdirSync(targetPath)
        const sourcePath = resolve(
          // 目前只支持创建Ts的模版
          // isTs ? './scripts/templateTs' : './scripts/template'
          isTs ? './scripts/templateTs' : './scripts/templateTs'
        )
        copyFile(sourcePath, targetPath)
        process.stdin.emit('end')
      }
    )
  }

  /**
   * @Description: 改变底层入口html的数据
   * @param {*} data_list 新页面的数据
   * @return {*}
   */
  const changePagesData = async (data_list) => {
    await fs.writeFile(
      path.resolve('./src/pages', 'pagesData.json'),
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

// 判断文件夹是否存在，不存在创建一个
const isExist = (path) => {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path)
  }
}

//递归复制模版文件夹内的文件
const copyFile = (sourcePath, targetPath) => {
  const sourceFile = fs.readdirSync(sourcePath, { withFileTypes: true })

  sourceFile.forEach((file) => {
    const newSourcePath = path.resolve(sourcePath, file.name)
    const newTargetPath = path.resolve(targetPath, file.name)
    //isDirectory() 判断这个文件是否是文件夹，是就继续递归复制其内容
    if (file.isDirectory()) {
      isExist(newTargetPath)
      copyFile(newSourcePath, newTargetPath)
    } else {
      fs.copyFileSync(newSourcePath, newTargetPath)
    }
  })
}