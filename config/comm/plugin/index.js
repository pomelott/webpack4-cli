const webpack = require("webpack");
const path = require('path');
const glob = require("glob");
const htmlPlugin = require('./htmlPlugin')
const {assetsDir, distAssetsDir} = require('../../tools/path')
//消除冗余的css
const purifyCssWebpack = require("purifycss-webpack");
const cssPlugin = require('./cssPlugin');
// 清除目录等
const cleanWebpackPlugin = require("clean-webpack-plugin");
//4.x之前用以压缩
// const uglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin')

//静态资源输出
const copyWebpackPlugin = require("copy-webpack-plugin");
console.log('1231231232')
console.log(assetsDir, distAssetsDir)
module.exports = [
		
		// 4.x之前可用uglifyjs-webpack-plugin用以压缩文件，4.x可用--mode更改模式为production来压缩文件
		// new uglifyjsWebpackPlugin(),
		new copyWebpackPlugin({
			patterns: [
				{
					from: assetsDir,
					to: distAssetsDir
				}
			]
		}),
		new VueLoaderPlugin(),
		
		// 消除冗余的css代码
		// new purifyCssWebpack({
		// 	// glob为扫描模块，使用其同步方法（请谨慎使用异步方法）
		// 	paths: glob.sync(path.join(__dirname, "src/*.html"))
		// }),
		// 全局暴露统一入口
		new webpack.ProvidePlugin({
			$: "jquery"
		}),
		...htmlPlugin,
		...cssPlugin
]