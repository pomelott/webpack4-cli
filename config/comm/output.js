const {distDir, pageDir} = require('../tools/path');
const {getPageModule} = require('../tools/util');
module.exports = {
    path: distDir,
    filename: 'js/[name].js?v=[hash]',
    chunkFilename: 'js/[name].js?v=[chunkhash]',
    devtoolModuleFilenameTemplate: 'webpack://[namespace]/[resource-path]?[loaders]'
}