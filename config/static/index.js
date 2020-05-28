
const userConfig = require('../../cli-config')
module.exports.devConf = {
    // 用户自定义
    port: '8090',
    host: 'localhost',
    htmlAssetsAbsolutePath: false,
    ...userConfig.dev,
    // 固定常量
    env: 'development'
}

module.exports.buildConf = {
    htmlAssetsAbsolutePath: false,
    ...userConfig.build,
    // 固定常量
    env: 'production'
}