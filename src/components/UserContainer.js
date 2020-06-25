import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchUsers}  from '../store/users/userActions'

function UserContainer(props) {

    useEffect(()=>{
        props.fetchUsers()
    },[])
    return (
        <div>
            Names {props.users.map((result)=>{
                return <li>{result}</li>
            })}
        </div>
    )
}


const mapStateToProp = state =>{
    return{
        users:state.users.Users
    }
}


const mapDispatchToProps = dispatch=>{
    return{
        fetchUsers: () =>dispatch(fetchUsers())
    }
}

export default  connect(mapStateToProp,mapDispatchToProps) (UserContainer) 
