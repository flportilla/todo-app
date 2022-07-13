import React from 'react'
import '../style/completedTasks.css'

const CompletedTask = ({ toDos, isCompleted, deleteTodo }) => {

  const completedTodos = toDos.filter(todo => todo.isComplete)

  return (
    <div className='completed_tasks'>
      {
        toDos.length === 0
          ? <h2 className='empty_completed'>Please, add a new task</h2>
          : completedTodos.length === 0
            ? <h2 className='empty_completed'>No task complete. Go do something</h2>

            : < ul >{
              completedTodos.map(todo => {
                return (
                  <li key={todo.id}>
                    <label htmlFor={todo.id}>
                      <input
                        type='checkbox'
                        onChange={() => isCompleted(todo.id)}
                        checked={todo.isComplete}
                        id={todo.id}
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
      }
    </div >
  )
}

export default CompletedTask