import {INCREMENT_COUNTER, DECREMENT_COUNTER, increment, decrement} from "./Action";

const initialState = {
    counter: 0
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case (INCREMENT_COUNTER):
            return {
                ...state,
                counter: state.counter + 1
            };
        case (DECREMENT_COUNTER):
            let counter = state.counter;
            if (state.counter !== 0) {
                counter = state.counter - 1;
            }
            return {
                ...state,
                counter: counter
            };
        default:
            return state;
    }
};

export default Reducer;