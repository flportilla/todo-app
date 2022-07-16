import React from 'react'

const List = ({ todo, isCompleted, deleteTodo, id, completedClass }) => {
  return (
    <li>
      <label
        htmlFor={id}
        className={completedClass}>
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
        Delete
      </button>
    </li>
  )
}

export default List