import React, {Component} from "react"
import {connect} from "react-redux"
import {increment, decrement} from "./redux/Action";

class CounterApp extends Component {

    handleIncrement = () => this.props.dispatch(increment());
    handleDecrement = () => this.props.dispatch(decrement());

    render() {
        return (
            <div>
                <button onClick={this.handleIncrement}>Increment</button>
                <p>{this.props.counter}</p>
                <button onClick={this.handleDecrement}>Decrement</button>
            </div>
        );
    }
};

const mapStateToProps = state => {
    const counter = state.counter;
    return {counter};
};

export default connect(mapStateToProps)(CounterApp);