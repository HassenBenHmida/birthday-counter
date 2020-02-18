import React, { Component } from 'react';

class Counter extends Component {

    render(){
        return(
            <div>
                <p>Days Left until your birthday: <strong>{`${this.props.daysLeft}`}</strong></p>
                <p>Days you have lived: <strong>{`${this.props.daysLived}`}</strong></p>
                <p>Months you have lived: <strong>{`${this.props.monthsLived}`}</strong></p>
            </div>
        )
    };
}

export default Counter;