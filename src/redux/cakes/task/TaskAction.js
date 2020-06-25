import {ADDTASK,DELETETASK} from './ActionTypes'

export function addtask(task){
    return{
        type:ADDTASK,
        task
    }
}

export function deletetask(id){
    return{
        type:DELETETASK,
        id
    }
}



