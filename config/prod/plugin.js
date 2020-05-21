const commonPluginConfig = require('../comm/plugin');
const webpack = require('webpack');
const {buildConf} = require('../static/index');
process.env.NODE_ENV = buildConf.env;
// commonPluginConfig.unshift(
//     new webpack.DefinePlugin({
//         'process.env.NODE_ENV': buildConf.env
//     })
// )

module.exports = commonPluginConfig;