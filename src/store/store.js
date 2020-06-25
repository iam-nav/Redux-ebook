import {createStore,combineReducers,applyMiddleware} from 'redux'
import {addTaskReducer} from './TaskReducer'
import {UserReducer} from './users/userReducer'
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    users:UserReducer,
    tasks:addTaskReducer
})
// const store = createStore(addTaskReducer)
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))

export default store