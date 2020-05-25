const fse = require('fs-extra');
const {pageDir, rootDir} = require('./path')
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
        pageModule[pageIdx].entryDir = 'entry/' + pageIdx.match(/(?:^\w+\/)(.*)/)[1];
        if (pageFile === 'param.js') {
            pageModule[pageIdx].param = pageFile;
        } else if (pageFile === 'page.html') {
            pageModule[pageIdx].html = pageFile;
        } else if (pageFile === 'entry.js') {
            pageModule[pageIdx].entry = pageFile;
        } else {
            logger.error('page file error, There should be param.js、entry.js at least !')
        }
        
    })
    return pageModule;
}


function getEntryModule (pageModule) {
    let temp = {};
    for (let key in pageModule) {
        console.log('ffffff u');
        console.log(key.match(/(?:^\w+\/)(.*)/))
        console.log(pageModule)
        let pageItem = pageModule[key];
        if (!pageItem.entry) {
            logger.error(`there should be a entry file in ${key}`)
        } else {
            temp[pageItem.entryDir] = ["@babel/polyfill", join(rootDir, key, 'entry.js')]
        }
    }
    return temp;
}


module.exports = {
    getAllFile,
    getPageModule,
    getEntryModule
}