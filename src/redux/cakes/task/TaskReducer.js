import {ADDTASK,DELETETASK} from  './ActionTypes'

const initialState = {
    task:[]
}

export const addTaskReducer = (state=initialState,action)=>{
    switch(action.type){
        case ADDTASK:
            return{
                ...state,
                task:[...state.task,action.task]
}
case DELETETASK:
const deleteTask =  state.task.filter((value,index)=> index!==action.id)
return {
    ...state,
    task:deleteTask
}

    default: return state
    }
}