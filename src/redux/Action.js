const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
const DECREMENT_COUNTER = 'DECREMENT_COUNTER';


const increment = () => ({type: INCREMENT_COUNTER});
const decrement = () => ({type: DECREMENT_COUNTER});


export {
    INCREMENT_COUNTER,
    DECREMENT_COUNTER,
    increment,
    decrement
}