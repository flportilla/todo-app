import React from 'react'
import '../style/todoList.css'

const ListItem = ({ toDos, completeTodo, deleteTodo, todoList, createTodo }) => {

  const pendingTodos = todoList.filter(todo => !todo.isComplete)
  return (
    <div className="todo_list">
      <div className='form'>
        <input type='text' />
        <button
          type='button'
          onClick={createTodo}
        >Add</button>
      </div>
      {
        toDos.length === 0
          ? ''
          : pendingTodos.length === 0
            ? <h2 className='empty_completed'>All tasks completed, congratulations.</h2>
            : <>
              <ul>
                {
                  pendingTodos.map(todo => {
                    return (
                      <li key={todo.id}>
                        <label htmlFor={todo.id}>
                          <input
                            id={todo.id}
                            type='checkbox'
                            onChange={() => completeTodo(todo.id)}
                          />
                          {todo.name}
                        </label>
                        <button
                          type='button'
                          onClick={() => deleteTodo(todo.id)}
                        >
                          delete
                        </button>
                      </li>
                    )
                  })
                }
              </ul>
            </>
      }
    </div >
  )
}

export default ListItem