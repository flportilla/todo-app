import React from 'react'
import todoService from '../services/todos'

const List = ({ todo, isCompleted, deleteTodo, id, completedClass, edit, isPending }) => {



  return (
    <li>
      <form onSubmit={(e) => { edit(id, e) }}>
        <label
          htmlFor={id}
          className={completedClass}>
          <input
            id={id}
            type='checkbox'
            onChange={() => isCompleted(id)}
            checked={todo.isComplete}
          />
          <span>
            {todo.name}
          </span>
        </label>
        <button
          type='button'
          onClick={({ target }) => { deleteTodo(id, target) }}
        >
          Delete
        </button>
        {isPending
          ? <button
            type='submit'
          >
            Edit
          </button>
          : null
        }
      </  form>
    </li>
  )
}

export default List