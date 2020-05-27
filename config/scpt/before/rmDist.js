const fse = require('fs-extra');
const {distDir} = require('../../tools/path');
const {LogLoading} = require('../../tools/logger')
module.exports = async () => {
    let loading = new LogLoading({
        prefix: 'webpack-multiPage-cli',
        txt: 'cleaning build files ...'
    })
    
    let std = await fse.remove(distDir);
    // console.log(std)
    loading.succeed('cleaning build files finished!')
}