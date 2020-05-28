
const {Plog, LogLoading} = require('pomelo-toolbox').print

module.exports.logger = new Plog({
    prefix: 'webpack-multi-page-cli'
});

module.exports.LogLoading = LogLoading