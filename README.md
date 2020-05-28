# webpack-multi-page-cli

![webpack-versioin](https://img.shields.io/badge/webpack-4.0.0+-green)
![node-versioin](https://img.shields.io/badge/node-v10.8.0-green)
![npm-versioin](https://img.shields.io/badge/npm-v6.2.0-green)

<img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">

webpackMultiPageCli based on webpack@latest. This cli can provide:
1. More flexible directory structure
2. More comprehensive build functions
3. Much Higher scalability
4. More active and frequent maintenance

If this is useful for you, please give me a star.

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

## Use in your work && custom HTML

### cli will create the entry automatically accoriding to you pageDir, in this cli, one page crrespond to one pageDir, and you can custom your page by two methods as follows:
1. use param.js and entry.js
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
2. use page.html and entry.js
you can write the html code you need to custom html file, and entry.js is the crrespond entrance file of assets.

## Use in your work && custom env
### custom env in cli-config.js in rootDir,detail as follows:
  | Name | Type | Default | Description |
  |:---:|:---:|:---:|:---:|
  | dev.port | String | '8090' | devServer server (This is the post-80s and post-90s era) |
  | dev.host | String | 'localhost' | devServer host |
  | dev.htmlAssetsAbsolutePath | Boolean\|String | false | control baseDir of html-inlined-assets in dev mode, false will use relative path |
  | build.htmlAssetsAbsolutePath | Boolean\|String | false | control baseDir of html-inlined-assets in build mode |

## Core plugin
### please give the star to give a lot of support, 
1. <a href="https://github.com/pomelott/html-inline-entry-chunk-plugin">html-inline-entry-chunk-plugin</a>
2. <a href="https://github.com/jantimon/html-webpack-plugin">html-webpack-plugin</a>
3. <a href="https://github.com/webpack-contrib/extract-text-webpack-plugin">extract-text-webpack-plugin</a>


