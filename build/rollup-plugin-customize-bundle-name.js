/**
*? rollup几种钩子函数的执行方式
async: 处理promise的异步钩子，也有同步版本
first: 如果多个插件实现了相同的钩子函数，那么会串式执行，从头到尾，但是，如果其中某个的返回值不是null也不是undefined的话，会直接终止掉后续插件。
sequential: 如果多个插件实现了相同的钩子函数，那么会串式执行，按照使用插件的顺序从头到尾执行，如果是异步的，会等待之前处理完毕，在执行下一个插件。
parallel: 同上，不过如果某个插件是异步的，其后的插件不会等待，而是并行执行。
 */
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