import React from 'react'
import '../style/pendingTasks.css'
import List from './List'

const ListItem = ({ toDos, isCompleted, deleteTodo, todoList, setNewtodo, newTodo, createTodo, edit }) => {

  const pendingTodos = todoList.filter(todo => !todo.isComplete)

  return (
    <div className="todo_list">
      <form
        className='add_todo_form'
        name='form'
        onSubmit={createTodo}
      >
        <input
          required
          value={newTodo}
          onChange={({ target }) => setNewtodo(target.value)}
          type='text'
          id='value'
        />
        <button
          type='submit'
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
                        isPending={true}
                        completedClass={'todo_label'}
                        key={todo.id}
                        id={todo.id}
                        todo={todo}
                        isCompleted={isCompleted}
                        deleteTodo={deleteTodo}
                        edit={edit}
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