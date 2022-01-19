import React, { useState } from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'

function TodoApp() {
    const [todos, settodos] = useState([])
    const [initialTodo, setInitialTodo] = useState({
        task: '',
        completed: false
    })
    const addTodo = () => {
        const todosCopy = [...todos]
        const index = todosCopy.findIndex((todo) => {
            return todo.task === initialTodo.task
        })
        console.log(index);
        if (index === -1) {
            todosCopy.push(initialTodo)
            settodos(todosCopy)
        }
        else {
            console.error('todo already exist');
            alert('todo already exist');
        }
    }
    const handleChange = (event) => {
        const initialTodoCopy = { ...initialTodo }
        initialTodoCopy.task = event.target.value
        initialTodoCopy.completed = false
        setInitialTodo(initialTodoCopy)
    }

    const completeTodo = (index) => {
        console.log(index);
        if (index >= 0 && index < todos.length) {
            const todosCopy = [...todos]
            // if(todosCopy[index].completed===true)
            // {
            //     todosCopy[index].completed=false
            // }
            // else
            // {
            //     todosCopy[index].completed=true 
            // }
            todosCopy[index].completed = !todosCopy[index].completed
            settodos(todosCopy)
        }
    }

    const deleteTodo = (index) => {
        const todosCopy = [...todos]
        const filteredTodos = todosCopy.filter((todo, i) => {
            return i !== index
        })
        settodos(filteredTodos)
    }

    return (
        <div>
            <AddTodo addTodo={addTodo} handleChange={handleChange} initialTodo={initialTodo} />
            <TodoList todos={todos} completeTodo={completeTodo} deleteTodo={deleteTodo} />
        </div>
    )
}

export default TodoApp

