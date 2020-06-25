import {FETCH_USERS_FAILURE,FETCH_USERS_SUCCESS,FETCH_USERS_REQUEST}  from './userTypes'


const initialState = {
    loading:false,
    Users:[],
    error:''
}

export const UserReducer = (state=initialState,action)=>{
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return{
                ...state,
                loading:true
            }
        case FETCH_USERS_SUCCESS:
            return{
                ...state,
                loading:false,
                Users:action.user,
                error:''
            }
        case FETCH_USERS_FAILURE:
            return{
                ...state,
                loading:false,
                Users:[],
                error:action.error
            }  
        default: return state
    }
}