
const mode = process.argv[process.argv.length - 1].split('=')[1];
const {devConf, buildConf} = require('./static')
let conf = {};
switch (mode) {
    case 'development':
        process.env.NODE_ENV = devConf.env;
        conf = require('./dev');
        break;
    case 'production':
        process.env.NODE_ENV = buildConf.env;
        conf = require('./prod')
        break;
    default:
        process.env.NODE_ENV = devConf.env;
        conf = require('./dev');
}
module.exports = conf;