import React from "react"
import style from "./index.less";

export default class Button extends React.Component{
    constructor(props){
        super(props)
    }
    doClick(){
        alert('this is a button');
    }
    render(){
        return (
            <div className={style.div_style}>
                <span className={style.hi} onClick={this.doClick.bind(this)}> button </span>
            </div>
        )
    }
}




