import React from 'react'

function AddTodo(props) {
    return (
        <div>
                <input type="text"
                name="task"
                value={props.initialTodo.task}
                onChange={(event)=>{
                    props.handleChange(event)
                }}/>

                <button onClick={()=>{
                    props.addTodo()
                }}>Add Todo</button>
        </div>
    )
}

export default AddTodo
