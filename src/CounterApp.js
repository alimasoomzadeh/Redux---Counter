import React, {Component} from 'react'


class CounterApp extends Component {
    state = {
        counter: 0
    };

    handleIncrement = () => {
        this.setState(prevState => ({
            counter: prevState.counter + 1
        }))
    }

    handleDecrement = () => {
        this.setState(prevState => ({
            counter: prevState.counter - 1
        }))
    }

    render() {
        return (
            <div>
                <button onClick={this.handleIncrement}>Increment</button>
                <p>{this.state.counter}</p>
                <button onClick={this.handleDecrement}>Decrement</button>
            </div>
        );
    }

}

export default CounterApp;