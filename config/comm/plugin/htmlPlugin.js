// html模板
const htmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path')
const {pageDir, tplDir, rootDir, tplCompiledDir, distJsDir, distDir} = require('../../tools/path');
const tplMaker = require('../../template/tplMaker');
const {getPageModule} = require('../../tools/util');
const tplPugDir = path.resolve(tplDir, 'tpl.pug');
const config = require('../../static')
const {logger} = require('../../tools/logger')
const htmlInlineEntryChunkPlugin = require('html-inline-entry-chunk-plugin');
const NODE_ENV  = process.env.NODE_ENV;
const activeConfig = NODE_ENV === config.devConf.env ? 'devConf' : 'buildConf';
let pages = getPageModule(pageDir);

let output = [];

for (let key in pages) {
	let moduleItem = pages[key];
	if (config[activeConfig].htmlAssetsAbsolutePath !== false) {
		output.push(new htmlInlineEntryChunkPlugin({
			baseJsDir: config[activeConfig].htmlAssetsAbsolutePath,
			baseCssDir: config[activeConfig].htmlAssetsAbsolutePath
		}))
	} else {
		output.push(new htmlInlineEntryChunkPlugin({
			baseJsDir: path.relative(path.join(distDir, key).replace(/\/\w+$/, ''), distDir),
			baseCssDir: path.relative(path.join(distDir, key).replace(/\/\w+$/, ''), distDir)
		}))
	}
	if (moduleItem.html) {
		// 使用page.html 重置模板
		output.push(
			new htmlWebpackPlugin({
				entry: moduleItem.entryDir,
				// chunks: [moduleItem.name],
				filename: `${key}.html`,
				title: moduleItem.name,
				// minify: false,
				// inject: 'head',
				template: path.join(rootDir, key, moduleItem.html)
			})
		)
	} else if (moduleItem.param) {
		// 使用默认模板，通过param.js传递渲染参数
		const pageParam = require(path.join(rootDir, key, moduleItem.param))
		const tplHtmlDir = path.resolve(tplCompiledDir, `${moduleItem.name}.html`);
		tplMaker(tplPugDir, pageParam, tplHtmlDir);
		output.push(
			new htmlWebpackPlugin({
				entry: moduleItem.entryDir,
				// chunks: [moduleItem.name],
				filename: `${key}.html`,
				// minify: false,
				// inject: 'head',
				title: moduleItem.name,
				template: tplHtmlDir
			})
		)
	}

	
}





module.exports = output;