const {logger} = require('../../tools/logger')
const rmDist = require('./rmDist');
logger.notice('npm-script: pre-hook execed.')
rmDist();