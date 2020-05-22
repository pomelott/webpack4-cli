const pug = require('pug');
const fs =require('fs')
// const fn = pug.compileFile(path.resolve(__dirname, './tpl.pug'));
// const tpl = pug.renderFile(path.resolve(__dirname, './tpl.pug'), {
//     title: 'fdsfsd'
// })
// const logger = require('../tools/logger')
// logger.log('12312321312')
// logger.logger(fn())
// console.log(1111111111111)
module.exports = function (tpl, data, targetPath) {
    data.pretty = true;
    let tplData = pug.renderFile(tpl, data);
    // fs.appendFileSync(targetPath, tplData);
    console.log(tplData)
    fs.writeFileSync(targetPath, tplData)
    return true;
}