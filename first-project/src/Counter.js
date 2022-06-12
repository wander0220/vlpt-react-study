import React, {Component, useReducer, useState} from 'react';

function reducer(state, action) {
 switch (action.type) {
     case 'INCREMENT':
         return state + 1; 
    case 'DECREMENT':
        return state  - 1;
     default:
        return state;
 }   
};

class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {
            counter: 0
        };
    }

    handleIncrease = () => {
        this.setState({
            counter:  this.state.counter + 1
        });
    }
    handleDecrease = () => {
        this.setState({
            counter:  this.state.counter - 1
        });
    }

    render(){
        return(
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleIncrease}>+1</button>
                <button onClick={this.handleDecrease}>-1</button>
            </div>
        )
    }

};

export default Counter;