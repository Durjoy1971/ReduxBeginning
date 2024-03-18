const redux = require('redux'); // import redux

const INITIAL_VALUE = {
    counter: 0,
    name : "Durjoy"
};


// reducer is the function that updates the store
const reducer = (store = INITIAL_VALUE, action) => {
    let newScore = store;
    if(action.type === 'INCREMENT'){
        newScore = {...store, counter : store.counter + 1}
    }
    else if(action.type === 'ADDITION'){
        newScore = {...store, counter : store.counter + action.payload.number}
    }
    return newScore;
}

// store is the initial state of the application
const store = redux.createStore(reducer);

// subscriber means to listen to the store
// it will be called whenever the store is updated
const subscriber = () => {
    const state = store.getState();
    console.log(state);
}

// subscribe the subscriber to the store
store.subscribe(subscriber);

// dispatch is the function that updates the store by calling the reducer
store.dispatch({type:'INCREMENT'});
store.dispatch({type:'ADDITION', payload: {number:7}});