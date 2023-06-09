import React, { useState } from 'react'
import { IoIosAddCircleOutline } from 'react-icons/io'

const TodoForm = (props) => {

    const [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        props.addTask({
            id: Math.floor(Math.random() * 100000),
            text: input,
            isDone: false,
        })
        setInput('')
    }

    return (
        <div>
            <form className='todo-form'>
                <input type="text" className='add-todo' placeholder='Add Todo' name='addtodo' value={input} onChange={(e) => setInput(e.target.value)} />
                <button className='todo-add-btn' onClick={handleSubmit}><IoIosAddCircleOutline className='add' /></button>
            </form>
        </div>
    )
}

export default TodoForm