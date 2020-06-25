import React,{useState} from 'react'
import {connect} from 'react-redux'
import {addtask,deletetask} from '../store/TaskAction'
import {Button,Form,Alert} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


function TodoContainer(props) {
    const [text,settext]=useState('')
    const [visible,setvisible]=useState(true)

    const setData=e=>{
        if(e.target.value===''){
        setvisible(true)
        }else
        setvisible(false)
        settext(e.target.value)
        
    }

    const addtask = ()=>{
        settext('')
        props.addtask(text)
        setvisible(true)
    }

    const deleteTask =id =>{
        props.deltask(id)
    } 
    return(
        <div style={{marginLeft:"40%"}}>
            <h1 style={{marginLeft:'25px',marginTop:'20px'}}>TODO-REDUX</h1>
            <Form.Control type="text" onChange={setData} value={text} style={{width:"40%",marginTop:"5%"}} placeholder="Add Task" />
            <Button variant="primary" onClick={addtask}  style={{marginLeft:"41%",marginTop:"-9%"}} disabled={visible}>Add</Button>
            {props.task.map((result,index)=>{
                return(
                <Alert style={{width:"49%"}} key={index} variant="dark">
                <Button variant="danger" style={{marginTop:"-7px"}} onClick={()=> deleteTask(index)}  className="float-right" >Delete</Button>
                {result}
              </Alert>
                )
            })}
            
        </div>
        )
    }

const mapStateToProp = state =>{
    return{
        task:state.tasks.task,
    }
}

//get the state property which You want to use

const mapDispatchToProps = dispatch=>{
    return{
        addtask: text=> dispatch(addtask(text)),  //text is the property going to change in the state
        deltask: id=> dispatch(deletetask(id))    //id is the property going to change in the state
    }
}

//dispatch the state property what you want to dispatch

export default connect(mapStateToProp,mapDispatchToProps) (TodoContainer) 
