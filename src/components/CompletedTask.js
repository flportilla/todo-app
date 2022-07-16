import React from 'react'
import '../style/completedTasks.css'
import List from './List'

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
                  <List
                    completedClass={'todo_label isCompleted'}
                    key={todo.id}
                    id={todo.id}
                    todo={todo}
                    isCompleted={isCompleted}
                    deleteTodo={deleteTodo}
                  />
                )
              })
            }
            </ul>
      }
    </div >
  )
}

export default CompletedTask