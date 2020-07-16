const commOutputConfig = require('../comm/output');
const {devConf} = require('../static')
const devOutput = {
    publicPath: `//localhost:${devConf.port}/`,
    hotUpdateChunkFilename: 'js/hot-update-[name].js',
    hotUpdateMainFilename: `hot-update.json`
}
module.exports = Object.assign(commOutputConfig, devOutput)
