import React, {Component} from "react"
import CounterApp from "./CounterApp"
import {Provider} from "react-redux"
import Store from "./redux/Store"

class App extends Component {
    render() {
        return (
            <Provider store={Store}>
                <CounterApp/>
            </Provider>
        );
    }
}

export default App;