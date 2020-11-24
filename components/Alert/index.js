import React from "react"
import style from "./index.less";
import Button from "../Button/index"

export default class Alert extends React.Component{
    constructor(props){
        super(props)
    }
    doClick(){
        alert('12345678');
    }
    render(){
        return (
            <div className={style.div_style}>
                <span className={style.hi} onClick={this.doClick.bind(this)}> this is alert </span>
                <Button></Button>
            </div>
        )
    }
}




