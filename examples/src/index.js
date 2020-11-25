import React from 'react';
import { render} from 'react-dom';
import {Button} from  "../../components/index"



class App extends React.Component{
    render(){
        return (
            <>
            <Button size="large" color="deeppink">
            Click Me
            </Button>
            </>
           
        )
    }
}

render(<App />, document.getElementById("root"));