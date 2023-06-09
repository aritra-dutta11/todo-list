import React from 'react'
import { TiTick } from 'react-icons/ti'
import { AiFillDelete } from 'react-icons/ai'

const Todos = ({ todos, removeTodo, completeTodo }) => {

    return todos.map((todo, index) => (
        <div className={todo.isDone ? "complete taskdiv" : "taskdiv"} key={index}>
            <div className='todo-name'>{todo.text}</div>
            <div className='icons' key={todo.id}>
                <TiTick className={todo.isDone ? "hide" : "tick"} onClick={() => { completeTodo(todo.id) }} />
                <AiFillDelete className='delete' onClick={() => { removeTodo(todo.id) }} />
            </div>
        </div>
    ))
}

export default Todos