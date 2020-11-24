const path = require('path');
const { findSubDir } = require("./buildTools");
const inputPath = path.join(__dirname,"../components");
const componentNameArr = findSubDir(inputPath);

module.exports = function customizeBundleName() {
    return {
        name: "rollup-plugin-customize-bundle-name", // this name will show up in warnings and errors
        buildStart() {
            let emitFileArrInfo = [{
                id:`${inputPath}/index.js`,
                fileName:"index.js"
            }]
            componentNameArr.forEach((componentName) => {
                emitFileArrInfo.push({
                    id:`${inputPath}/${componentName}/index.js`,
                    fileName:`${componentName}/index.js`
                })
            })
            emitFileArrInfo.forEach((emitFile)=>{
                this.emitFile({
                    type: 'chunk',
                    id: emitFile.id,
                    fileName: emitFile.fileName
                }); 
            })
            // this.emitFile({
            //     type: 'chunk',
            //     id: '/Users/zhangfan/fzhange_pro/flySnow/components/index.js',
            //     fileName: "index.js",
            // });
            // this.emitFile({
            //     type: 'chunk',
            //     id: '/Users/zhangfan/fzhange_pro/flySnow/components/Alert/index.js',
            //     fileName: "Alert/index.js",
            // });
        },
    }
}