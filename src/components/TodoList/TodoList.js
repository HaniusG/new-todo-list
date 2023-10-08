import React from 'react'
import TodoListItem from './TodoListItem/TodoListItem'

export default function TodoList({items, deleteItem, onDoneOrImp}) {
    const data = items.map(({ text, important, done, date, id }) => {
        return (
          <TodoListItem
            text={text}
            important={important}
            key={id}
            id={id}
            done={done}
            date={date}
            deleteItem={deleteItem}
            onDoneOrImp={onDoneOrImp}
          />
        );
      });

      return(
        <div>
            {data}
        </div>
        
      )
}
