import axios from 'axios'
import {FETCH_USERS_FAILURE,FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS} from './userTypes'

export const fetchUserRequest = ()=>{
    return {
        type:FETCH_USERS_REQUEST
    }
}


export const fetchUserSuccess = user=>{
    return {
        type:FETCH_USERS_SUCCESS,
        user
    }
}

export const fetchUserFailure = error =>{
    return{
        type:FETCH_USERS_FAILURE,
        error
    }
}

export const fetchUsers =()=>{
    return (dispatch)=>{
        console.log('working')
        dispatch(fetchUserRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            const user = res.data.map((user=>user.name))
            dispatch(fetchUserSuccess(user))
        })
        .catch(error =>{
            const errorMsg = error.message
            dispatch(fetchUserFailure(errorMsg))
        })
    }
}