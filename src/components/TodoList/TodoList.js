import React from 'react'
import TodoListItem from './TodoListItem/TodoListItem'

export default function TodoList() {
    return (
        <div>
            <TodoListItem title="Buy groceries for next week" date="28th Jun 2020" />
            <TodoListItem title="Renew car insurance" date="28th Jun 2020" />
            <TodoListItem title="Sign up for online course" date="28th Jun 2020" />
        </div>
    )
}
