const commOutputConfig = require('../comm/output');
const {devConf} = require('../static')
const devOutput = {
    publicPath: `//${devConf.host}:${devConf.port}/`,
    hotUpdateChunkFilename: 'js/hot-update-[name].js',
    hotUpdateMainFilename: `hot-update.json`
}
console.log(Object.assign(commOutputConfig, devOutput))
module.exports = Object.assign(commOutputConfig, devOutput)