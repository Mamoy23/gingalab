import React from 'react';
//import { ValueContext } from './App'

class Show extends React.Component {
    constructor(props){
        super(props)

    }
    //static contextType = ValueContext;
    render() {
        return(
            <div>
                <p>{this.props.value}</p>
                {/* <p>{this.context}</p> */}
            </div>
        )
    }
  }

export default Show