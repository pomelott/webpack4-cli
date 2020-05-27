const commonPluginConfig = require('../comm/plugin');
// const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
commonPluginConfig.push(
    new BundleAnalyzerPlugin({
		openAnalyzer: false
	})
)
// console.log(process.env.NODE_ENV)
module.exports = commonPluginConfig;