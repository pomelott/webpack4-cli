const commonPluginConfig = require('../comm/plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
commonPluginConfig.push(
    new BundleAnalyzerPlugin({
		openAnalyzer: false
	})
)
module.exports = commonPluginConfig;