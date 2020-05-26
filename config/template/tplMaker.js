const pug = require('pug');
const fs =require('fs')
let _ = require('lodash');
const defaultParam = {
    title: "multiPage-cli",
    tag: {
        meta: [{
            name: 'webpack-multiPage-cli',
            content: 'https://github.com/pomelott/webpack4.x_Demo'
        }],
        headLink: [],
        headScript: [],
        bodyLink: [],
        bodyScript: []
    },
    vueInit: {}
}
module.exports = function (tpl, data, targetPath) {
    
    let copy = _.cloneDeep(defaultParam);
    // data.pretty = true;
    let fn = pug.compileFile(tpl, {pretty: true}), tplData;
    data = _.merge(copy, data);
    console.log('----------- data -----------')
    console.log(data)
    tplData = fn(data);
    // let tplData = pug.renderFile(tpl, data);
    console.log('------- tpl data --------')
    console.log(tplData)
    fs.writeFileSync(targetPath, tplData)
    return true;
}