const fse = require('fs-extra');
const {pageDir} = require('./path')
const {logger} = require('./logger');
const {join} = require('path')
function getAllFile (dir) {
    let temp = [];
    function getDirFile (dir) {
        let dirs = fse.readdirSync(dir);
        dirs.forEach((item) => {
            let fPath = join(dir, item);
            let stat = fse.statSync(fPath)
            if (stat.isFile()) {
                temp.push(fPath)
            } else {
                getDirFile(fPath)
            }
        })
    }
    getDirFile(dir)
    return temp;
}

function getPageModule (dir) {
    let pages = getAllFile(dir);
    let pageModule = {}
    pages.forEach((item) => {
        let pathValue = item.match(/page.*/)[0],
            pageArr = pathValue.match(/((?:[^\/]*?\/*)+)\/([^\/]+)/),
            pageIdx = pageArr[1],
            pageFile = pageArr[2],
            pageName = pageIdx.split('/').pop();
            logger.log(pageArr);
        if (pageIdx === 'page') {
            logger.error(`page module error in ${pageArr[0]}`);
        }
        if (!pageModule[pageIdx]) {
            pageModule[pageIdx] = {};
        }
        pageModule[pageIdx].name = pageName;
        if (pageFile === 'param.js') {
            pageModule[pageIdx].param = pageFile;
        } else if (pageFile === 'page.html') {
            pageModule[pageIdx].html = pageFile;
        }
        
    })
    return pageModule;
}



module.exports = {
    getAllFile,
    getPageModule
}