const fse = require('fs-extra');
const {distDir} = require('../../tools/path')
module.exports = async () => {
    console.log('ffffffff unc-----')
    let std = fse.remove(distDir);
    console.log('del ok !!!!')
}