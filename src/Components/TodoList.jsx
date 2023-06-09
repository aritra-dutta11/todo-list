import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todos from './Todos'

const TodoList = () => {

    const [todos, setTodos] = useState([])

    //Add Task
    const addTask = task => {
        if (!task.text) {
            return
        }

        const newTodos = [task, ...todos]
        setTodos(newTodos)
    }

    //Remove Task
    const removeTodo = id => {
        const newTodos = [...todos].filter(task => task.id !== id)
        setTodos(newTodos)
    }
    //Complete Task
    const completeTodo = id => {
        const newTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isDone = true;
            }
            return todo
        })
        setTodos(newTodos)
    }
    return (
        <div>
            <TodoForm addTask={addTask}></TodoForm>
            <Todos todos={todos} removeTodo={removeTodo} completeTodo={completeTodo}></Todos>
        </div>
    )
}

export default TodoList