// html模板
const htmlWebpackPlugin = require("html-webpack-plugin");
const fse = require('fs-extra');
const path = require('path')
const {pageDir, tplDir, rootDir, tplCompiledDir} = require('../../tools/path');
const tplMaker = require('../../template/tplMaker');
const {getPageModule} = require('../../tools/util');
const tplPugDir = path.resolve(tplDir, 'tpl.pug');
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');
const ChunkManifestPlugin = require('webpack-chunk-manifest-plugin');
// const HtmlRuntimePlugin = require("html-webpack-inline-runtime-plugin");
const {logger} = require('../../tools/logger')
const htmlInlineEntryChunkPlugin = require('html-inline-entry-chunk-plugin')
let pages = getPageModule(pageDir);
// let pages = fse.readdirSync(pageDir);
let output = [];

logger.log(pages)
logger.log('-=-=-=-=-=--=');

for (let key in pages) {
	let moduleItem = pages[key];
	logger.log(moduleItem);
	output.push(new htmlInlineEntryChunkPlugin())
	
	console.log('--------------html plugin-----------------------')
	if (moduleItem.html) {
		// 使用page.html 重置模板
		output.push(
			new htmlWebpackPlugin({
				entry: moduleItem.name,
				// chunks: [moduleItem.name],
				filename: `${key}.html`,
				title: moduleItem.name,
				template: path.join(rootDir, key, moduleItem.html)
			})
		)
	} else if (moduleItem.param) {
		// 使用默认模板，通过param.js传递渲染参数
		const pageParam = require(path.join(rootDir, key, moduleItem.param))
		const tplHtmlDir = path.resolve(tplCompiledDir, `${moduleItem.name}.html`);
		console.log('10101---------')
		console.log(pageParam)
		tplMaker(tplPugDir, pageParam, tplHtmlDir);
		output.push(
			new htmlWebpackPlugin({
				entry: moduleItem.name,
				// chunks: [moduleItem.name],
				filename: `${key}.html`,
				title: moduleItem.name,
				template: tplHtmlDir
			})
		)
	}
	
	// output.push(
	// 	new InlineManifestWebpackPlugin()
	// 	// new HtmlRuntimePlugin()
	// )
	
}


// pages.forEach((item) => {
	
	// tplMaker(tplPugDir, {title: 'TNT'}, tplHtmlDir);
    // console.log(item)
    // output.push(
    //     new htmlWebpackPlugin({
	// 		chunks: [item],
	// 		filename: `page/dsadas/dsadas/${item}.html`,
	// 		title: item,
	// 		template: tplHtmlDir
	// 		// templateContent: tplRender
	// 		// template: path.resolve(__dirname, '../../template/tpl.pug'),
	// 		// templateParameters: {title: 'fuckff'},
	// 		// minify: {
	// 		// 	collapseWhitespace: false
	// 		// }
	// 	})
    // )
// })


module.exports = output;