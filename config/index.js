
const mode = process.argv[process.argv.length - 1].split('=')[1];
let conf = {};
switch (mode) {
    case 'development':
        conf = require('./dev');
        break;
    case 'production':
        conf = require('./prod')
        break;
    default:
        conf = require('./dev');
}
module.exports = conf;