import React from 'react';

class Slider extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            value: 5
        }
    }

    render() {
        return(
            <div className="my-5 m-4">
                <input 
                    type="range"
                    className="custom-range"
                    min={0}
                    max={10}
                    step={1}
                    defaultValue={this.state.value}
                    onChange={this.props.handleChange}
                />
            </div>
        )
    }
  }

export default Slider