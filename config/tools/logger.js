
const {Plog, LogLoading} = require('pomelo-toolbox').print

module.exports.logger = new Plog({
    prefix: 'webpack4-cli'
});

module.exports.LogLoading = LogLoading