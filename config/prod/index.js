const path = require('path');
const pluginsConfig = require("../comm/plugin");
const rulesConfig = require("../comm/rule");
const resolveConfig = require('../comm/resolve');
const entryConfig = require('../comm/entry')
const {distDir, pageDir} = require('../tools/path')
module.exports = {
    entry: entryConfig,
	output: {
		path: distDir,
		// 打包多出口文件
		// 生成 a.bundle.js  b.bundle.js  jquery.bundle.js
		filename: 'js/[name].js'
	},
	plugins: pluginsConfig,
	// devtool: "source-map",  // 开启调试模式
	module:{
		rules: rulesConfig
	},
	resolve: resolveConfig,
	// 提取js，lib1名字可改
	// splitChunkPlugin功能非常强大，想要纤细了解可以查看我的个人博客
	// https://www.cnblogs.com/pomelott/p/9030208.html 
	// 有疑问的可以留言
	optimization: {
		splitChunks: {
			// minChunks: 1,
			// minSize: 1,
			// chunks: 'all',
			cacheGroups: {
				lib1: {
					chunks: "async",
					name: "common",  // 此处的name为其他用于使用chunk名字的地方做服务
					// enforce: true,
					priority: -20
				},
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: "vendors",
					chunks: "all",
					priority: 10
				}
			}
			
		},
		runtimeChunk: {
			name: entrypoint => `runtime-${entrypoint.name}`
		  },
		  moduleIds: "hashed",
		
	}
}