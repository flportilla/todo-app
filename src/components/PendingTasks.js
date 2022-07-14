import React from 'react'
import '../style/todoList.css'
import List from './List'

const ListItem = ({ toDos, isCompleted, deleteTodo, todoList, createTodo }) => {

  const pendingTodos = todoList.filter(todo => !todo.isComplete)

  return (
    <div className="todo_list">
      <form
        className='form'
        name='form'
        onSubmit={createTodo}
      >
        <input
          type='text'
          id='value'
        />
        <button
          type='button'
          onClick={createTodo}
        >
          Add
        </button>
      </form>
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
                      <List
                        id={todo.id}
                        todo={todo}
                        isCompleted={isCompleted}
                        deleteTodo={deleteTodo}
                      />
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