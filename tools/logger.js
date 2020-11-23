const logger = require('log4js')
function createLogger(filePath, level) {
  const log = logger.getLogger(filePath)
  log.level = level || 'debug'
  return log
}

module.exports = createLogger
