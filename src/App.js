import React, { useState, useMemo, useEffect } from 'react';
import CompletedTask from './components/CompletedTask';
import Header from './components/Header';
import TodoList from './components/TodoList'
import todoServices from './services/todos'

function App() {
  const [searchValue, setSearchValue] = useState('')
  const [todos, setTodos] = useState([])

  useEffect(() => {
    todoServices
      .getTodos()
      .then(todos => setTodos(todos))
  })

  //Check if the todos are marked as completed or not and change the list acordingly
  const completeTodo = async (id) => {
    const selectedTodo = todos.find(todo => todo.id === id)
    const changedTodo = { ...selectedTodo, isComplete: !selectedTodo.isComplete }
    await todoServices.markAsComplete(id, changedTodo)

  }

  //Handle the delete of todos on click
  const deleteTodo = async (id) => {
    await todoServices
      .removeTodo(id)
  }
  //Handle the creation of new todos and adds them to the list
  const createTodo = async (e) => {

    const input = e.target.parentElement.firstChild
    const newTodoValue = input.value

    const newTodoObj = {
      name: newTodoValue,
      isComplete: false
    }

    await todoServices.addTodo(newTodoObj)
    input.value = ''
  }
  //This two functions use the memo hook to filter the results on a search
  const handleSearch = (e) => {
    setSearchValue(e.target.value)
  }
  const todoList = useMemo(() => {
    return todos
      .filter(todo =>
        todo.name.toLowerCase()
          .includes(searchValue.toLowerCase()))
  }, [todos])

  return (
    <>
      <Header
        handleSearch={handleSearch}
      />
      <TodoList
        toDos={todos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
        createTodo={createTodo}
        todoList={todoList}
      />
      <CompletedTask
        toDos={todos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
    </>
  );
}

export default App;