<!--
 * @Author       : 桔子
 * @Date         : 2024-04-02 17:04:05
 * @LastEditors  : 桔子
 * @LastEditTime : 2024-04-08 16:25:03
 * @Description  : 头部注释配置模板
 * @FilePath     : /vue-multipage/README.md
-->

# vue-multipage

vue3+vite+ts+pinia+vant 多页面移动端应用

# 文件夹介绍

ToDo 原来的src文件夹被我删除了0. husky: 提交代码规范文件夹

1. assets: 静态资源文件夹
2. components: 组件文件夹
3. const: 公共定义类型文件夹（这里我放了多页面跳转的路由名定义和方法）
4. directives: 自定义指令文件夹
5. dist: 打包后的文件
6. hooks: 钩子函数文件夹
7. icons: 图标文件夹 svg-icon的
8. pages: 多页面文件夹
9. public: 公共资源文件夹
10. scripts: 执行脚本文件夹，比如终端命令创建空白页面
11. store: pinia文件夹，计划存储多个页面能共同使用数据的pinia
12. styles: 样式文件夹
13. types: 类型文件夹
14. utils: 工具文件夹
    后面就是一些配置环境变量，eslint,prettier,ts配置文件了，注意这个buildConfig文件，是多页面打包用到的

# 命令介绍

pnpm run new:page，这是创建新的页面命令
后面会输入页面名和描述 例如 bill:账单
此时会生成新的页面文件和入口html文件，切记不能存在重复的，重复会报错
注意这里创建完新的页面后需要手动改两处代码
第一个就是生成的html里面引用有个./页面名称/main.ts这里需要改，没办法，生成文件里面的引用无法自动修改
第二个就是路由里面的history: VueRouter.createWebHashHistory("../页面名称.html")，同理页面名称换成新页面的名称即可，例如上面创建的bill:账单，那么换成bill

除此之外删除页面，不仅仅要删除该页面文件夹，比如bill文件夹，还要删除bill.html,还有在scripts文件夹下的multiPages.json，找到对应的bill, 删除即可，这里是检测是否重复的页面名的，如果不删除，下次想再次创建bill页面，会提示已存在

关于删除确实目前有点麻烦，后期我会在写个脚本命令，去删除

pnpm run build 这里是默认全部打包所有页面

pnpm run build -- --page='index&bill&detail' 这里是打包index,bill,detail页面，可以一个或者多个

最后index页面会默认一定打包进去，想要修改可以去vite.config.ts修改

提交代码，会对文件进行检测，如果不想要

# 在 .husky/commit-msg 内注释以下代码即可

pnpm commitlint --edit "$1"

如何跳过某一个检查

# 加上 --no-verify即可跳过git hook校验（--no-verify 简写为 -n）

git commit -m "xxx" --no-verify

个人建议使用，团队成员多了规范一致会好点

# 项目安装了vant，dayjs, sass, axios, lodash-es, postcss-px-to-viewport等，具体可以看下配置文件
