
const {Plog, LogLoading} = require('pomelo-toolbox').print

module.exports.logger = new Plog({
    prefix: 'webpack-multiPage-cli'
});

module.exports.LogLoading = LogLoading