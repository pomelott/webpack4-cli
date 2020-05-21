
const pluginsConfig = require("./plugin");
const resolveConfig = require('../comm/resolve');
const entryConfig = require('../comm/entry');
const optimizationConfig = require('../comm/optimization');
const outputConfig = require('../comm/output')
const moduleConfig = require('../comm/module');
module.exports = {
    entry: entryConfig,
	output: outputConfig,
	plugins: pluginsConfig,
	module: moduleConfig,
	resolve: resolveConfig,
	optimization: optimizationConfig
}