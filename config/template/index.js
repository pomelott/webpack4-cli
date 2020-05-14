
const path = require('path')
const tplMaker = require('./tplMaker')
const tplRender = require('./tpl.pug');
const pug = require('pug');
// let fn = pug.render(path.resolve('./tpl.pug'), {title: 'tttt'})
let tpl = pug.render(path.resolve('./tpl.pug', {title: 'TNT'}))
module.exports = () => {
    return tpl
}