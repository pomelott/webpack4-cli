const path = require('path')
module.exports.rootDir = path.resolve(__dirname, '../../');
module.exports.srcDir  = path.resolve(this.rootDir, 'src');
module.exports.pageDir = path.resolve(this.rootDir, 'page');
module.exports.distDir = path.resolve(this.rootDir, 'dist');
module.exports.confDir = path.resolve(this.rootDir, 'config');
module.exports.tplDir = path.resolve(this.confDir, 'template');
module.exports.tplCompiledDir = path.resolve(this.tplDir, 'compiledTpl');