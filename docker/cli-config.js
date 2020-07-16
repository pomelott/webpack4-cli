module.exports = {
    dev: {
        port: '8090',
        host: '0.0.0.0',
        // dev时使用相对于devserver的contentBaseDir
        htmlAssetsAbsolutePath: false,
    },
    build: {
        // build时可根据个人需要指定资源服务器域名或CDN服务器域名
        htmlAssetsAbsolutePath: 'http://www.cdn-plugin.com/assets/',
    }
}
