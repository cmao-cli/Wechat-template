## 技术栈
uni-app(vue 转 小程序) + typescript

## 依赖模块
- [uni-app](https://uniapp.dcloud.io/) (转小程序相关)
- [vue-cli](https://cli.vuejs.org/) (基础功能提供)
- [@cmao/yummi](https:/phab.srv.codemao.cn/source/yuumi/)(项目生成)

## 运行
npm run start

## 打包
npm run build

## 目录结构
```
.
├── README.md
├── babel.config.js
├── dist  // 编译后的代码
│   └── dev // 环境文件夹
│       └── mp-weixin 可识别的微信代码
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
│   └── index.html
├── src
│   ├── App.vue // 整个小程序的入口，可存放全局数据
│   ├── main.ts // 挂载App文件
│   ├── manifest.json // 配置文件（mp-weixin字段中的数据会编译到project.config.js）
│   ├── pages  // 业务代码
│   │   └── index
│   ├── pages.json // 全局路由表 & 小程序页面设置
│   ├── sfc.d.ts
│   └── static // 存放静态资源
│       └── logo.png
├── tsconfig.json // ts配置相关
└── yarn.lock

```
文件的详细说明，请参阅： https://uniapp.dcloud.io/collocation/pages

## 使用说明
### 1、使用 `yuumi` 拉取该模版到项目目录下
### 2、将 `appId` 填入 `src/manifest.json` 文件中的  `mp-weixin` 下的 `appid` 字段中
### 3、`npm install` & `npm run start`
### 4、打开微信开发者工具，选择小程序 -> 添加 -> 导入项目 -> 目录选择项目目录下的 `dist/dev/mp-weixin` (即框架编译出的对应环境的小程序代码包)
### 5、enjoy coding

