import React from 'react'

function TodoList(props) {
    return (
        <div>
            {props.todos.length > 0 ? props.todos.map((todo, index) => {
                return <div key={index}>
                    <span style={todo.completed ?
                        {
                            textDecoration: 'line-through'
                        } : {

                        }}>{todo.task}</span>
                    <button onClick={() => {
                        props.completeTodo(index)
                    }}>Completed</button>

                    <button onClick={() => {
                        props.deleteTodo(index)
                    }}>Delete</button>
                </div>
            }) : 'no todos'}
        </div>
    )
}

export default TodoList
