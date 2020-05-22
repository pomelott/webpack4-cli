const {distDir, pageDir} = require('../tools/path');
const {getPageModule} = require('../tools/util');
console.log('999999')
console.log(getPageModule(pageDir))
module.exports = {
    path: distDir,
    filename: 'js/[name].js?v=[hash]',
    chunkFilename: 'js/[name].js?v=[chunkhash]'
}