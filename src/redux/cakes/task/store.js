import {createStore} from 'redux'
import {addTaskReducer} from './TaskReducer'

const store = createStore(addTaskReducer)

export default store