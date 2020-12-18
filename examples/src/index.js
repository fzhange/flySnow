import React from 'react';
import { render} from 'react-dom';
import {Button,Carousel} from  "../../components/index"



class App extends React.Component{
    render(){
        return (
            <>
                <Carousel></Carousel>
            </>
           
        )
    }
}

render(<App />, document.getElementById("root"));