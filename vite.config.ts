/*
 * @Author       : 桔子
 * @Date         : 2024-03-25 17:27:09
 * @LastEditors  : 桔子
 * @LastEditTime : 2024-04-03 16:20:37
 * @Description  : 头部注释配置模板
 * @FilePath     : /vue-multipage/vite.config.ts
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite' //组件自动按需引入
import { VantResolver } from 'unplugin-vue-components/resolvers'
import autoImport from 'unplugin-auto-import/vite'
import { visualizer } from 'rollup-plugin-visualizer' //打包size分析工具
import compression from 'vite-plugin-compression'
import mpaPlugin from 'vite-plugin-mpa-plus' //gzip/br 压缩
import path from 'path'
import chalk from 'chalk'
import fs from 'fs'


// 引入多页面配置文件
const pages = require('./scripts/multiPages.json')

// 获取npm run dev后缀 配置的环境变量
const NPM_CONFIG_PAGE: string = process.env.npm_config_page || ''

// 命令行报错提示
const errorLog = (error) => console.log(chalk.red(`${error}`))

//获取指定的单页面入口
const getEnterPages = () => {
  if (!NPM_CONFIG_PAGE)
    errorLog(
      '--------------请在命令行后以 `--page=页面名称` 格式指定页面名称！---------------'
    )
  const filterArr = pages.filter(
    (item) => item.chunk.toLowerCase() == NPM_CONFIG_PAGE.toLowerCase()
  )
  if (!filterArr.length)
    errorLog(
      '-----------------------不存在此页面，请检查页面名称！-------------------------'
    )

  return {
    [NPM_CONFIG_PAGE]: path.resolve(
      __dirname,
      `src/pages/${NPM_CONFIG_PAGE}/index.html`
    )
  }
}

console.log('NPM_CONFIG_PAGE', getEnterPages())

/**
 * @Description: 重定向配置,修复页面刷新导致的问题
 * @return {*}
 */
const getPageConfig: any = ()=>{
  const rewrites: any = []
  const page_config: any = []

  const data = fs.readFileSync(path.resolve('./scripts', 'multiPages.json'),'utf-8')

  const value = JSON.parse(data)

  value.forEach((item) => {
    const data_config = {
      entry: path.resolve(__dirname, `./src/pages/${item.chunk}/main.ts`),
      filename: path.resolve(__dirname, `./src/pages/${item.chunk}/index.html`),
      template: path.resolve(__dirname, `./src/pages/${item.chunk}/index.html`),
      inject: {
        data: {
          title: item.chunk
        }
      }
    }

    const data_rewrites = {
      from: new RegExp(`/${item.chunk}`),
      to: `/${item.chunk}/index.html`
    }

    page_config.push(data_config)
    rewrites.push(data_rewrites)
  });

  return { rewrites, page_config }
}


export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  let env = {} as any
  const root: any = process.cwd()
  const isBuild = command === 'build'
  if (!isBuild) {
    env = loadEnv((process.argv[2]), root)
  } else {
    env = loadEnv(mode, root)
  }

  return {
    // root: path.resolve(__dirname, `./src/pages/${NPM_CONFIG_PAGE}`),
    root: path.resolve(__dirname, `./src/pages`),
    base: '/',
    envDir: path.resolve(__dirname), //用于加载 .env 文件的目录。可以是一个绝对路径，也可以是相对于项目根的路径。
    plugins: [
      mpaPlugin({
        pages: getPageConfig().page_config,
        historyApiFallback: {
          rewrites: getPageConfig().rewrites
        }
      }),
      vue(),
      vueJsx(),
      Components({
        resolvers: [VantResolver()]
      }),
      autoImport({
        imports: ['vue', 'vue-router', 'pinia'],
        dts: path.resolve(__dirname, './auto-import.d.ts'),
        eslintrc: {
          // 已存在文件设置默认 false，需要更新时再打开，防止每次更新都重新生成
          enabled: false,
          // 生成文件地址和名称
          filepath: path.resolve(__dirname, './.eslintrc-auto-import.json'),
          globalsPropValue: true
        }
      }),
      visualizer(),
      // gzip格式
      compression({
        threshold: 1024 * 500, // 体积大于 threshold 才会被压缩,单位 b
        ext: '.gz', // 压缩文件格式
        deleteOriginFile: false // 是否删除源文件
      })
      // br格式
      // compression({
      //   threshold: 1024 * 500,    // 体积大于 threshold 才会被压缩,单位 b
      //   ext: '.br',
      //   algorithm: 'brotliCompress',
      //   deleteOriginFile: false
      // })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@pages': fileURLToPath(new URL('./src/pages', import.meta.url))
      }
    },
    build: {
      outDir: path.resolve(__dirname, `dist/${NPM_CONFIG_PAGE}`), // 指定输出路径
      assetsInlineLimit: 4096, //小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求
      emptyOutDir: true, //Vite 会在构建时清空该目录
      sourcemap: 'inline',
      rollupOptions: {
        input: getEnterPages(),
        output: {
          assetFileNames: '[ext]/[name]-[hash].[ext]',
          chunkFileNames: 'js/[name]-[hash].js',
          entryFileNames: 'js/[name]-[hash].js',
          compact: true,
          manualChunks: (id: string) => {
            if (id.includes('node_modules')) {
              return id
                .toString()
                .split('node_modules/')[1]
                .split('/')[0]
                .toString() // 拆分多个vendors
            }
          }
        }
      }
    },
    server: {
      port: 9528,
      proxy: {
        // 选项写法
        '/api': {
          target: 'http://127.0.0.1:9528',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      },
      hmr: {
        overlay: false
      },
      open: true, // 在服务器启动时自动在浏览器中打开应用程序
      host: '0.0.0.0'
    }
  }
})




