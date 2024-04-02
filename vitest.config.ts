/*
 * @Author       : 桔子
 * @Date         : 2024-03-25 17:27:09
 * @LastEditors  : 桔子
 * @LastEditTime : 2024-03-26 17:56:17
 * @Description  : 头部注释配置模板
 * @FilePath     : /vue-more/vitest.config.ts
 */
import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/*'],
      root: fileURLToPath(new URL('./', import.meta.url))
    }
  })
)
