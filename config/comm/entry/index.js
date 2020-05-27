const {getPageModule, getEntryModule} = require('../../tools/util');
const {pageDir} = require('../../tools/path');
let pageModule = getPageModule(pageDir);
let entryModule = getEntryModule(pageModule);
module.exports = entryModule;