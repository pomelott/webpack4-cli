const commOutputConfig = require('../comm/output');
const {devConf} = require('../static')
const devOutput = {
    // publicPath: 'http://localhost:8090/',
    hotUpdateChunkFilename: 'js/hot-update.js',
    hotUpdateMainFilename: 'http://localhost:8090/hot-update.json'
}
console.log(Object.assign(commOutputConfig, devOutput))
module.exports = Object.assign(commOutputConfig, devOutput)