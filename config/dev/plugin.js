const commonPluginConfig = require('../comm/plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');
commonPluginConfig.push(
	// dll 可根据需要进行删减
	new webpack.DllReferencePlugin({
		manifest: require("../../dllOutput/json/dll-babel.json")
	}),
	new webpack.DllReferencePlugin({
		manifest: require("../../dllOutput/json/dll-vue.json")
	}),
	new webpack.DllReferencePlugin({
		manifest: require("../../dllOutput/json/dll-react.json")
	}),
)
module.exports = commonPluginConfig;