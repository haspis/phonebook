import React, { Component } from 'react';

class LCCounter extends Component {
    state = {
        number : 0
    }

    constructor(props) {
        super(props);
        console.log('constructor');
    }

    componentWillMount(){
        console.log('componentWillMount (deprecated)');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate');
        if(nextState.number % 5 === 0) return false;
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpate');
    }

    handleIncrease = () => {
        this.setState(
            ({ number }) => ({
                number: number + 1
            })
        );
    }

    handleDecrease = () => {
        this.setState(
            ({ number }) => ({
                number: number -1
            })
        );
    }

    render() {
        console.log('render');
        return(
            <div>
                <h1>Counter2</h1>
                <div>val : {this.state.number} </div>
                <button onClick={this.handleIncrease}>+++</button>
                <button onClick={this.handleDecrease}>---</button>
            </div>
        );
    }
}

export default LCCounter;