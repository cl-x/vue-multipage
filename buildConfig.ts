/*
 * @Author       : 桔子
 * @Date         : 2024-04-07 10:11:09
 * @LastEditors  : 桔子
 * @LastEditTime : 2024-04-07 14:16:52
 * @Description  : 头部注释配置模板
 * @FilePath     : /vue-multipage/buildConfig.ts
 */
import { fileURLToPath, URL } from 'node:url'
import chalk from 'chalk'

// 引入多页面配置文件
const pages: any = require('./scripts/multiPages.json')

// 获取npm run dev后缀 配置的环境变量
const NPM_CONFIG_PAGE: string = process.env.npm_config_page || ''

// 命令行报错提示
const errorLog: any = (error: any) => console.log(chalk.red(`${error}`))

const input_page: any = {
  index: fileURLToPath(new URL('pages/index.html', import.meta.url)) //默认入口
}

//获取打包的多页面入口
export const getEnterPages = () => {
  let filter_pages_list = pages // 默认全部页面打包
  const npm_config_page = NPM_CONFIG_PAGE.split('&')

  if (NPM_CONFIG_PAGE && !Array.isArray(npm_config_page)) {
    errorLog("如果打包一个或多个页面，希望是一个字符串，如'pageA&pageB'")
    process.exit(1)
  }

  if (NPM_CONFIG_PAGE && Array.isArray(npm_config_page)) {
    // 打包单个或多个页面
    filter_pages_list = []
    npm_config_page.forEach((item: any) => {
      const index: number = pages.findIndex((page: any) => page.chunk === item)
      if (index !== -1) filter_pages_list.push(pages[index])
    })
  }

  filter_pages_list.forEach((item: any) => {
    input_page[item.chunk] = fileURLToPath(
      new URL(`pages/${item.chunk}.html`, import.meta.url)
    )
  })

  return input_page
}
