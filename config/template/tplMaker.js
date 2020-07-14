const pug = require('pug');
const fs =require('fs')
let _ = require('lodash');
const defaultParam = {
    title: "multipage-cli",
    tag: {
        meta: [],
        headLink: [],
        headScript: [],
        bodyLink: [],
        bodyScript: []
    },
    vueInit: {},
    reactInit: {}
}
module.exports = function (tpl, data, targetPath) {
    let copy = _.cloneDeep(defaultParam);
    let fn = pug.compileFile(tpl, {pretty: true}), tplData;
    data = _.merge(copy, data);
    tplData = fn(data);
    fs.writeFileSync(targetPath, tplData)
    return true;
}