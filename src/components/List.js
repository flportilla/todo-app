import React from 'react'

const List = ({ todo, isCompleted, deleteTodo, id }) => {
  return (
    <li key={id}>
      <label htmlFor={id}>
        <input
          id={id}
          type='checkbox'
          onChange={() => isCompleted(id)}
          checked={todo.isComplete}
        />
        {todo.name}
      </label>
      <button
        type='button'
        onClick={() => deleteTodo(id)}
      >
        delete
      </button>
    </li>
  )
}

export default List