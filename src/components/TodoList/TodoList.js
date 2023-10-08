import React from 'react'
import TodoListItem from './TodoListItem/TodoListItem'

export default function TodoList({items, deleteItem, onDoneOrImp, editItem}) {
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
            editItem={editItem}
          />
        );
      });

      return(
        <div>
            {data}
        </div>
        
      )
}
