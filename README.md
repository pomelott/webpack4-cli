# webpack-multi-page-cli

![webpack-versioin](https://img.shields.io/badge/webpack-4.0.0+-green)
![node-versioin](https://img.shields.io/badge/node-v10.8.0-green)
![npm-versioin](https://img.shields.io/badge/npm-v6.2.0-green)

<img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">

### webpackMultiPageCli based on webpack@latest. This cli can provide:
1. More flexible directory structure
2. More comprehensive build functions
3. Much Higher scalability
4. More active and frequent maintenance

### If this is useful for you, please give me a star.

## Fast Use
* download the dependences
```base
    npm install
```
* running with development mode
```bash
    npm run dev
```
* running with production mode
```bash
    npm run build
```
* running with analyzer
```bash
    npm run analyze
```
## Use in your work && customize HTML

cli will create the entry automatically accoriding to you pageDir, in this cli, one page crrespond to one pageDir, and you can custom your page by two methods as follows:
1. ###  use param.js and entry.js
if there is a param.js, cli will resolve this with the default html template written in pug engine, and entry.js is the crrespond entrance file of assets that will be inlined in the resolved html.
* the config of param.js as follows:
  | Name | Type | Default | Description |
  |:---:|:---:|:---:|:---:|
  | title | String | 'multi-page-cli' | the text of title-tag in html |
  | tag | Object | {meta: [],eadLink: [],headScript: [],bodyLink: [],bodyScript: []} | cotrol the assets tags |
  | tag.meta | Array | [] | control meta tag |
  | tag.headLink | Array | [ ] | control link tag in head section |
  | tag.headScript | Array | [ ] | control script tag in head section |
  | tag.bodyLink | Array | [ ] | control link tag in body section |
  | tag.bodyScript | Array | [ ] | control script tag in body section |
  | vueInit | Object | {} | control the root instance of Vue |
  | vueInit.el | String | undefined | el attribute of vue instance, such as '#app' |
  | vueInit.entrance | String | undefined  | control the entrance vue component |
```js
    // for detai code, you can view vueDemo in dev mode
    module.exports = {
        title: 'Example in Multi-Page',
        tag: {
            meta: [{
                name: 'webpack-multi-page-cli',
                content: 'vueDemo'
            }, {
                name: "webpack-multi-page-cli",
                content: 'https://github.com/pomelott/webpack4.x_Demo'
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
        <title>Example in Multi-Page</title>
        <meta name="webpack-multi-page-cli" content="vueDemo" />
        <meta name="webpack-multi-page-cli" content="https://github.com/pomelott/webpack4.x_Demo" />
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
2. ###  use page.html and entry.js
you can write the html code you need to customize html file, and entry.js is the crrespond entrance file of assets.

## Use in your work && customize env
customize env in cli-config.js in rootDir,detail as follows:
  | Name | Type | Default | Description |
  |:---:|:---:|:---:|:---:|
  | dev.port | String | '8090' | devServer port (This is the post-80s and post-90s era) |
  | dev.host | String | 'localhost' | devServer host |
  | dev.htmlAssetsAbsolutePath | Boolean\|String | false | control baseDir of html-inlined-assets in dev mode, false will use relative path |
  | build.htmlAssetsAbsolutePath | Boolean\|String | false | control baseDir of html-inlined-assets in build mode |

## Tips
1. ### you can customize your html dir in pageDir, and the output path will be changed accoridingly. for example:
```
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
then the output will changed
```
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
### 2. the path: src/assets is used to store documents such as documents that do not need to be packaged。
### 3. you can choose the image-minify plugin in gulpfile. usually the default is OK.
### 4. you can customize you postcss.config.js, now, autoprefixer has benn used.
### 5. notice you env version, ![webpack-versioin](https://img.shields.io/badge/webpack-4.0.0+-green) ![node-versioin](https://img.shields.io/badge/node-v10.8.0-green) ![npm-versioin](https://img.shields.io/badge/npm-v6.2.0-green) will be fine.

## Core plugin
please give the star to give a lot of support, 
1. <a href="https://github.com/pomelott/html-inline-entry-chunk-plugin">html-inline-entry-chunk-plugin</a>
2. <a href="https://github.com/jantimon/html-webpack-plugin">html-webpack-plugin</a>
3. <a href="https://github.com/webpack-contrib/extract-text-webpack-plugin">extract-text-webpack-plugin</a>


## For Help
1.  <a href="https://www.cnblogs.com/pomelott/p/9030208.html">the split-chunk-plugin Doc</a>
2.  <a href="https://www.cnblogs.com/pomelott/p/6974167.html">webpack 1.X help Doc</a>
3.  <a href="https://www.cnblogs.com/pomelott/p/8977092.html">webpack 4.X help Doc</a>


