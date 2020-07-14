
const {Plog, LogLoading} = require('pomelo-toolbox').print

module.exports.logger = new Plog({
    prefix: 'webpack-multipage-cli'
});

module.exports.LogLoading = LogLoading