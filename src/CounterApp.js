import React, {Component} from "react"
import {connect} from "react-redux"
import {increment, decrement} from "./redux/Action";

class CounterApp extends Component {

    handleIncrement = () => this.props.dispatch(increment());
    handleDecrement = () => this.props.dispatch(decrement());

    render() {
        return (
            <div>
                <div>
                    <p className="counterLabel">{this.props.counter}</p>
                </div>
                <div>
                    <div>
                        <button className="boxButton" onClick={this.handleIncrement}></button>
                    </div>
                    <div>
                        <button className="boxButton" onClick={this.handleDecrement}></button>
                    </div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => {
    const counter = state.counter;
    return {counter};
};

export default connect(mapStateToProps)(CounterApp);