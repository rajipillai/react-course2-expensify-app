import { createStore } from 'redux';

// Action generator - functions that return action objects
// passing parameters like incremementby count, 
// payload is set with empty default array otherwise if no value is passed will get error
// const incrementCount = (payload = {}) => ({
//     type: 'INCREMENT',
//     incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
// });
// destructuring the function with payload 

const incrementCount = ({ incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

//Reducers
//1. Reducers are pure functions (pure functions means, output is determined by input)
//2. Never change state or actions (it should access previous state and action and return new object instead of altering the state and actions)
//setting default state
const CountReducer = (state = { count: 0}, action) => {      
    switch (action.type) {
        case 'INCREMENT' :
        //removing this constant because this condition of checking number and default is already set
        // in the action generator function
        //const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT' :
            //const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - action.decrementBy
            } 
        case 'SET' :
            return {
                count: action.count
            }      
        case 'RESET' :
            return {
                count: 0
            }        
            default:
            return state;        
    }        
};


const store = createStore(CountReducer);


// watch the changes to the store using subscribe
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})


// Actions

// i'd like to increment the count
// dispatching the action type INCREMENT to the store
/* store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
}); */

//unsubscribe();
/* 
store.dispatch({
    type: 'INCREMENT'
});
 */
store.dispatch(incrementCount( {incrementBy: 5} ));

store.dispatch(incrementCount());

store.dispatch({
    type: 'RESET'
});

// store.dispatch({
//     type: 'DECREMENT'
// })

store.dispatch(decrementCount());

// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10
// })

store.dispatch(decrementCount( { decrementBy: 10 } ));

store.dispatch({
    type: 'SET',
    count: 101
})