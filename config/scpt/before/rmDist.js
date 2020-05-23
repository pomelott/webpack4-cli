const fse = require('fs-extra');
const {distDir} = require('../../tools/path')
module.exports = async () => {
    console.log('ffffffff unc-----')
    let std = await fse.remove(distDir);
    console.log(std)
    console.log('del ok !!!!')
}