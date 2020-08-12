# webpack4-cli

![webpack-versioin](https://img.shields.io/badge/webpack-4.0.0+-green)
![node-versioin](https://img.shields.io/badge/node-v10.8.0-green)
![npm-versioin](https://img.shields.io/badge/npm-v6.2.0-green)

<img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">

### webpack4-cli 基于webpack@4，此cli可提供:

1. 更加灵活的、切近实际工作流的目录结构, 既可单页也可多页.
2. 更全面的构建功能（runtime-chunk、postcss、sass、less、gulp图片压缩、bundle分析、TS、vue-ts、react等）.
3. 更高的扩展性，构建目标html快速定义、重写机制、cdnURL定制等.
4. 更活跃、稳定的更新等.
5. 基于实际工作流（不拿实际需求Coding都是耍流氓）
6. 提供 Docker Image 供快速构建

### 如果此cli帮助到您，欢迎给星，您的星星是我持续更新的动力！
## 快速构建
* 注：若不使用Docker，可跳过此项，直接进入快速使用。
### 拉取镜像
```bash
    docker pull pomelott/webpack-cli
```
### 启动开发环境
注： 以下文件目录可在本机自行创建，能够提供文件夹供容器挂载即可。
* /Users/tate/Documents/work/geek/docker/ws/src: 用于存放资源文件，修改文件可验证启动热更新
* /Users/tate/Documents/work/geek/docker/ws/page: 用于存放html及入口构建相关文件
```bash
    docker run -it -v /Users/tate/Documents/work/geek/docker/ws/src:/home/webpack4-cli/src -v /Users/tate/Documents/work/geek/docker/ws/page:/home/webpack4-cli/page -p 8090:8090 --env WEBPACK_MODE=dev pomelott/webpack-cli
```
在宿主机浏览器访问 `localhost:8090/page/index.html` 即可。
### 启动编译环境
1. 启动容器在后台执行
```
    docker run -itd pomelott/webpack4-cli /bin/bash
```
2. 查看容器id
```
    docker ps
```
3. 执行构建

```bash
    docker exec -it -w /home/webpack4-cli b7c2b83ed900 /bin/bash
```

1. 导出build后文件

```bash
    docker cp b7c2b83ed900:/home/webpack4-cli/dist ./
```

## 快速使用

* 下载依赖（建议yarn）

```bash
    yarn install
```

or

```bash
    npm install
```

* 开发模式

```bash
    npm run dev
```

* 生产模式

```bash
    npm run build
```

* 压缩图片

```bash
    npm run min-img
```

* 输出dll

```bash
    npm run dll
```

* bundle分析

```bash
    npm run analyze
```

## 在实际工作中使用 & 自定义 HTML

cli将会根据pageDir路径，动态生成webpack entry，在源码中，一个页面就是一个文件夹。
首先介绍一个html文件夹下可以存放的三个文件：

* entry.js 为本页面的资源入口（无论使用哪种方式定制HTML，此文件都必须存在）
* param.js 为默认模板传递参数（如果你想快速定制HTML，这是个不错的选择）
* page.html 用于重写HTML，若此文件存在，cli将会将page.html的优先级提至最高，用以替代默认模板。

你可以通过以下两种方式自定义HTML：

### 使用param.js 和 entry.js

如果param.js存在，cli则会将param.js中的参数与pug引擎模板结合产出对应HTML，entry.js中引入的资源（js,css）将会被通过标签插入至对应HTML中。

* param.js 中的配置项如下，你也可以通过快速查看demo中的代码例子 来快速上手：
  | Name | Type | Default | Description |
  |:---:|:---:|:---:|:---:|
  | title | String | 'multipage-cli' | 标题内容 |
  | tag | Object | {meta: [],eadLink: [],headScript: [],bodyLink: [],bodyScript: []} | 控制插入在html中的资源标签 |
  | tag.meta | Array | [] | control meta tag |
  | tag.headLink | Array | [ ] | control link tag in head section |
  | tag.headScript | Array | [ ] | control script tag in head section |
  | tag.bodyLink | Array | [ ] | control link tag in body section |
  | tag.bodyScript | Array | [ ] | control script tag in body section |
  | vueInit | Object | {} | 初始化vue根节点 |
  | vueInit.el | String | undefined | vue根实例的el值，如”#app“ |
  | vueInit.entrance | String | undefined  | vue根实例的入口组件，可详见vue-demo |
  | reactInit | Object | {} | 初始化react根节点 |
  | reactInit.el | String | undefined | react根实例的el值，如”#root“ 可详见react-demo |

```js
    // for detai code, you can view vueDemo in dev mode
    module.exports = {
        title: 'Example in multipage',
        tag: {
            meta: [{
                name: 'pwebpack4-cli',
                content: 'vueDemo'
            }, {
                name: "webpack4-cli",
                content: 'https://github.com/pomelott/webpack4-cli'
            }],
            headLink: [{
                rel: "icon",
                type: "image/png",
                href: 'https://vuejs.bootcss.com/images/logo.png'
            },{
                href: 'https://cdn.bootcdn.net/ajax/libs/animate.css/4.1.0/animate.min.css',
                rel: "stylesheet"
            }]
        },
        vueInit: {
            el: '#app',
            entrance: 'example'
        }
    }
```

```html
    <!doctype html>
    <html lang="en">

    <head>
        <title>Example in Multipage</title>
        <meta name="twebpack4-cli" content="vueDemo" />
        <meta name="webpack4-cli" content="https://github.com/pomelott/webpack4-cli" />
        <link rel="icon" type="image/png" href="https://vuejs.bootcss.com/images/logo.png" />
        <link href="https://cdn.bootcdn.net/ajax/libs/animate.css/4.1.0/animate.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="http://www.cdn-plugin.com/assets/css/entry/example/vueDemo.css?v=2466d76ff005024cce26">
    </head>

    <body>
        <div id="app">
            <div is="example"></div>
        </div>
        <script src="http://www.cdn-plugin.com/assets/js/runtime/runtime-vueDemo.js?v=2466d76ff005024cce26"></script>
        <script src="http://www.cdn-plugin.com/assets/js/common/vendors.js?v=5b4f3badf8d6ddb0036f"></script>
        <script src="http://www.cdn-plugin.com/assets/js/entry/example/vueDemo.js?v=8df1c19f97ce1a9abf72"></script>
    </body>

    </html>
```

### 使用 page.html 和 entry.js

使用page.html 意味着，完全的定制化，你需要完全重写HTML

## 在实际工作中使用 & 自定义env

在根路径的 cli-config.js 文件中自定义env,详细选项如下:
  | Name | Type | Default | Description |
  |:---:|:---:|:---:|:---:|
  | dev.port | String | '8090' | 开发环境端口 (这是8090的时代) |
  | dev.host | String | 'localhost' | devServer host |
  | dev.htmlAssetsAbsolutePath | Boolean\|String | false | 控制dev环境下，编译后HTML中资源标签的根路径，如果为false则常规使用相对路径（dev一般使用相对路径） |
  | build.htmlAssetsAbsolutePath | Boolean\|String | false | 控制build环境下，编译后HTML中资源标签的根路径，一般以此来修改为服务器资源基础url或cdn-url |

## 提醒

1. 你可以自定义你的page目录，可根据业务模块嵌套等等。并且输出的html目录也会动态变化。以下有个例子可以帮助您理解，您也可以在cli中尝试

```bash
    Root
    └───src
    │———node_modules
    |———page   // html dir
    |    |———moduleOne
    |    |     |———PageOne
    |    |     |    |———param.js
    |    |     |    └———entry.js
    |    |     └———pageTwo
    |    |          |———page.html
    |    |          └———entry.js
    |    |———moduleTwo
    |    |     |———PageThree 
    |    |     |    |———param.js  
    |    |     |    └———entry.js  
    |    |     └———pageFour
    |    |          |———param.js  
    |    |          └———entry.js   

```

输出路径也会自动变化（包括html和静态资源）

```bash
    Root 
    |———dist   // output root
    |    |——— js
    |    |     |———common
    |    |     |    └——— vendor.js
    |    |     |———entry  // html unique chunk
    |    |     |    |——— moduleOne
    |    |     |    |       |——— pageOne.js
    |    |     |    |       └——— pageTwo.js
    |    |     |    └——— moduleTwo
    |    |     |            |——— pageThree.js
    |    |     |            └——— pageFour.js
    |    |     └———runtime
    |    |          |——— runtime-pageOne.js
    |    |          |——— runtime-pageTwo.js
    |    |          |——— runtime-pageThree.js
    |    |          └——— runtime-pageFour.js
    |    |——— css
    |    |     |——— ...   // css dir is the same as js
    |    |    ...  
```

1. src/assets路径用以存放静态文件，例如txt文档等，此路径下的文件将不会被打包，并会原样输出至dist下。
2. 你可以在gulpfile下手动选择压缩插件，通常默认选项就可满足需要。
3. 你可以再 postcss.config.js中自定义, 现在, autoprefixer 已被配置.
4. 注意你的环境版本, ![webpack-versioin](https://img.shields.io/badge/webpack-4.0.0+-green) ![node-versioin](https://img.shields.io/badge/node-v10.8.0-green) ![npm-versioin](https://img.shields.io/badge/npm-v6.2.0-green)
5. 建议使用yarn安装模块包，这将会让你在多人项目中减少因版本不一致带来的问题。

## 核心插件

希望在以下插件中得到更多支持，欢迎给星：

* [html-inline-entry-chunk-plugin](https://github.com/pomelott/html-inline-entry-chunk-plugin)
* [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)
* [extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin)

## 友情链接

* [the split-chunk-plugin Doc](https://www.cnblogs.com/pomelott/p/9030208.htm)
* [webpack 1.x help Doc](https://www.cnblogs.com/pomelott/p/6974167.html)
* [webpack 4.x help Doc](https://www.cnblogs.com/pomelott/p/8977092.html)