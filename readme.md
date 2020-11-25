# flySnow 飞雪
一个基于rollup的库工具。

使用者可快速利用flySnow进行组件的打包。供他人使用。
# features
- 多入口组件支持、
- 动态的代码分离
- 常规的cjs es 模块导出
- 本地可视化开发 
- 基于react-styleguide的doc功能
- 支持less less-modules开发
- 自主的autoprefixer css-module postcssPresetEnv postcss-nested  postcss-simple-vars 支持
- eslint 支持

# usage
```bash
# bundle output
npm run build 
# lib目录下为cjs es目录下为esm

# dev with doc 
npm run doc_server 

# build with doc
npm run doc_build 
# The styleguide directory is a static resource

# dev with development 
npm run dev

```
# Development agreement

开发组件默认在components目录下;具体请查看components Button组件。

# Document effect display

![doc 效果图](http://images.e-healthcare.net/images/2020/11/25/images2011251207333207.jpg "doc 效果图")



