/*
 * @Author       : 桔子
 * @Date         : 2024-04-07 11:00:10
 * @LastEditors  : 桔子
 * @LastEditTime : 2024-04-07 15:11:57
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
    "./.eslintrc-auto-import.json",
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
    "@typescript-eslint/no-explicit-any": "off", //关闭any类型报错
    "@typescript-eslint/no-var-requires": 0, //解决报错：Require statement not part of import statement.
    "vue/multi-word-component-names": "off", //关闭组件命名规则娇艳
  },
  root: true,
};
