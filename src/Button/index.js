import React from "react"
import "./index.less";


let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(x); // 1
console.log(y); // 2
console.log(z); // { a: 3, b: 4 }

// "foobar".includes("foo")
console.log('"foobar".includes("foo"): ', "foobar".includes("foo"));
const NPMComponent = () => {
  return <div className="div_style">
        <span className="hi"> Hello, Rollup </span>
      </div>
}

console.log('__buildEnv__: ', process.env.NODE_ENV);

export {
    NPMComponent
}

