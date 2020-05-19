const dirs = require('../../tools/path')
module.exports= {
    alias: {
        '@': dirs.srcDir,
        'js': dirs.jsDir,
        'sass': dirs.sassDir,
        'comp': dirs.componentsDir,
        'less': dirs.lessDir,
        'assets': dirs.assetsDir
    }
}