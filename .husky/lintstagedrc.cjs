/*
 * @Author       : 桔子
 * @Date         : 2024-04-07 14:26:29
 * @LastEditors  : 桔子
 * @LastEditTime : 2024-04-07 14:32:20
 * @Description  : 头部注释配置模板
 * @FilePath     : /vue-multipage/.husky/lintstagedrc.cjs
 */
module.exports = {
  // 对指定格式文件 在提交的时候执行相应的修复命令
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': ['prettier --write--parser json'],
  'package.json': ['prettier --write'],
  '*.vue': ['eslint --fix', 'stylelint --fix', 'prettier --write', 'git add .'],
  '*.{scss,less,styl,css,html}': ['stylelint --fix', 'prettier --write', 'git add .'],
  '*.md': ['prettier --write'],
};