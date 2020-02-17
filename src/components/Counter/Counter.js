import React, { Component } from 'react';

class Counter extends Component {

    render(){
        return(
            <div>
                <p>{`Days Left: ${this.props.daysLeft}`}</p>
            </div>
        )
    };
}

export default Counter;