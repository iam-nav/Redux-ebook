const redux = require('redux')
const createStore = redux.createStore

// actions redux
const BUY_CAKE = 'BUY_CAKE'
function Buycake(){
    return{
        type:BUY_CAKE,
        info:'first redux action'
    }
}
//reducer

const inititalCakeState ={
    numofCakes:10
}

function cakereducer(state=inititalCakeState,action){
    switch(action.type){
        case BUY_CAKE :return{
            ...state,
            numofCakes:state.numofCakes -1
        }
        default: return state
    }
}

const store = createStore(cakereducer)

console.log('Initial State'+store.getState())
const unsubscribe =store.subscribe(()=>console.log('updates state',store.getState))
store.dispatch(Buycake())
unsubscribe()