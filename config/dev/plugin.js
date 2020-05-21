const commonPluginConfig = require('../comm/plugin');
const webpack = require('webpack');

// commonPluginConfig.unshift(
//     new webpack.DefinePlugin({
//         'process.env.NODE_ENV': devConf.env
//     })
// )
// console.log(process.env.NODE_ENV)
module.exports = commonPluginConfig;