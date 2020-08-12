
const pluginsConfig = require("./plugin");
const resolveConfig = require('../comm/resolve');
const entryConfig = require('../comm/entry');
const optimizationConfig = require('../comm/optimization');
const outputConfig = require('../comm/output')
const moduleConfig = require('../comm/module');
const {rootDir} = require('../tools/path')
module.exports = {
    entry: entryConfig,
	output: outputConfig,
	plugins: pluginsConfig,
	module: moduleConfig,
	resolve: resolveConfig,
	// context: rootDir,
	optimization: optimizationConfig,
	performance : {
		hints : false
	}
}