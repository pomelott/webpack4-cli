const pluginsConfig = require("./plugin");
const entryConfig = require('../comm/entry');
const resolveConfig = require('../comm/resolve');
const optimizationConfig = require('../comm/optimization');
const moduleConfig = require('../comm/module');
const outputConfig = require('./output');
// const outputConfig = require('../comm/output')
const contextConfig = require('../comm/context')
const {devConf} = require('../static');
const {distDir, distPageDir, distJsDir, distCssDir} = require('../tools/path');


module.exports = {
    entry: entryConfig,
	output: outputConfig,
	plugins: pluginsConfig,
	resolve: resolveConfig,
	module: moduleConfig,
	optimization: optimizationConfig,
	// context: contextConfig,
	devServer: {
		// publicPath: 'localhost:8090/js',
		// disableHostCheck: true,
		// contentBasePublicPath: '/dist',
		contentBase: distDir,
		// contentBase: [distPageDir, distJsDir, distCssDir],  // 此处需要使用绝对路径
		host: devConf.host,  // win8 下自启浏览器可能是因为没设置为localhost
		port: devConf.port,
		open: true, // 开启浏览器
		// hotOnly: true,
		openPage: 'page/index.html',
		inline: true,
		compress: true,
		// watchContentBase: true,
	},
	devtool: "inline-source-map",  // 开启调试模式
}