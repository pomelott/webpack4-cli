const pluginsConfig = require("./plugin");
const entryConfig = require('../comm/entry');
const resolveConfig = require('../comm/resolve');
const optimizationConfig = require('../comm/optimization');
const moduleConfig = require('../comm/module');
const outputConfig = require('./output');
const {devConf} = require('../static');
const {rootDir, distDir} = require('../tools/path');

module.exports = {
    entry: entryConfig,
	output: outputConfig,
	plugins: pluginsConfig,
	resolve: resolveConfig,
	module: moduleConfig,
	optimization: optimizationConfig,
	context: rootDir,
	devServer: {
		disableHostCheck: true,
		contentBase: distDir,
		host: devConf.host,  // win8 下自启浏览器可能是因为没设置为localhost
		port: devConf.port,
		open: true, // 开启浏览器
		openPage: 'page/index.html',
		inline: true,
		compress: true,
		watchOptions: {
			watch: true
		}
	},
	devtool: "inline-source-map",  // 开启调试模式
}