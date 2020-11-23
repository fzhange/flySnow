const path = require('path');
const {outputArr,external,plugins} = require("./rollupBaseConfig");

const {findSubDir} = require("./buildTools");
const inputPath = path.join(__dirname,"../components");


let rollupConfigArr = [];
const componentNameArr = findSubDir(inputPath);

componentNameArr.forEach((componentName)=>{
    let newOutputArr = JSON.parse(JSON.stringify(outputArr))
    // console.log('componentName: ', componentName);
    newOutputArr.forEach((outputObj)=>{
        outputObj.file = path.join(outputObj.file,componentName,"/index.js");
    })
    
    rollupConfigArr.push({
        input:path.join(inputPath,componentName),
        output:newOutputArr,
        external,
        plugins,
    })
})




module.exports  = rollupConfigArr

