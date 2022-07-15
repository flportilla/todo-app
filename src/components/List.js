import React from 'react'

const List = ({ todo, isCompleted, deleteTodo, id }) => {
  return (
    <li>
      <label
        htmlFor={id}
        className={'todo_label'}>
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