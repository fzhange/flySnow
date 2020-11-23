const fs = require('fs');
const path = require("path");
const logger = require("../tools/logger")(__filename);


/**
 * @param {*} parentPath 
 * 寻找parentPath目录下 一级子目录
 */
const findSubDir = function(parentPath){
  try{
    let dirs = fs.readdirSync(path.normalize(parentPath));
    return dirs.filter((dir)=>fs.statSync(path.join(parentPath,dir)).isDirectory())
  }catch(error){
    logger.error(error)
  }
}

module.exports = {
    findSubDir,
}