const {getPageModule, getEntryModule} = require('../../tools/util');
const {pageDir} = require('../../tools/path');
let pageModule = getPageModule(pageDir);
let entryModule = getEntryModule(pageModule);
console.log('-------------- entry -----------------')
console.log(entryModule)
module.exports = entryModule;