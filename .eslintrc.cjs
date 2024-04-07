/*
 * @Author       : 桔子
 * @Date         : 2024-04-07 11:00:10
 * @LastEditors  : 桔子
 * @LastEditTime : 2024-04-07 11:00:17
 * @Description  : 头部注释配置模板
 * @FilePath     : /vue-multipage/.eslintrc.cjs
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "plugin:@typescript-eslint/recommended",
  ],
  overrides: [],
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    parser: "@typescript-eslint/parser",
  },
  plugins: ["vue", "@typescript-eslint", "prettier"],
  rules: {
    "@typescript-eslint/no-var-requires": 0, //解决报错：Require statement not part of import statement.
    "vue/multi-word-component-names": "off", //关闭组件命名规则娇艳
  },
  root: true,
};
