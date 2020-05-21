module.exports = {
    splitChunks: {
        // minChunks: 1,
        // minSize: 1,
        // chunks: 'all',
        cacheGroups: {
            lib1: {
                chunks: "async",
                name: "common/common",  // 此处的name为其他用于使用chunk名字的地方做服务
                enforce: true,
                priority: -20
            },
            commons: {
                test: /[\\/]node_modules[\\/]/,
                name: "common/vendors",
                chunks: "all",
                priority: 10
            }
        }
        
    },
    runtimeChunk: {
        name: entrypoint => {
            let filename = entrypoint.name.split('/').pop();
            return `runtime/runtime-${filename}`
        }
      },
      moduleIds: "hashed",
    
}