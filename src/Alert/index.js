import React from "react"
import "./index.less";

class Alert extends React.Component{
    constructor(props){
        super(props)
    }
    doClick(){
        alert('12345678');
    }
    render(){
        return (
            <div className="div_style">
                <span className="hi" onClick={this.doClick.bind(this)}> this is alert </span>
            </div>
        )
    }
}



export {
    Alert
}

