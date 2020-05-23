// 分离css
const extractTextPlugin = require("extract-text-webpack-plugin");
const env = process.env.NODE_ENV;
const extractPlugin = [];
if (env === 'production') {
    extractPlugin.push(
        new extractTextPlugin('css/[name].css?v=[hash]')
    )
}
module.exports = extractPlugin;