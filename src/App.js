import React, { useState, useMemo, useEffect } from 'react';
import CompletedTask from './components/CompletedTask';
import Header from './components/Header';
import Login from './components/Login';
import PendingTasks from './components/PendingTasks'
import todoServices from './services/todos'
import './style/header.css'

function App() {
  const [searchValue, setSearchValue] = useState('')
  const [todos, setTodos] = useState([])
  const [newTodo, setNewtodo] = useState('')
  const [flag, setFlag] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    todoServices
      .getTodos()
      .then(todos => setTodos(todos))
  }, [flag])

  //Check if the todos are marked as completed or not and change the list acordingly
  const isCompleted = async (id) => {

    const selectedTodo = todos.find(todo => todo.id === id)
    const changedTodo = { ...selectedTodo, isComplete: !selectedTodo.isComplete }

    await todoServices.markAsComplete(id, changedTodo)
    setFlag(!flag)
  }
  //Handle the delete of todos on click
  const deleteTodo = async (id) => {
    await todoServices
      .removeTodo(id)
    setFlag(!flag)
  }
  //Handle the creation of new todos and adds them to the list
  const createTodo = async (e) => {
    e.preventDefault()
    const newTodoObj = {
      name: newTodo,
      isComplete: false
    }

    await todoServices.addTodo(newTodoObj)
    setFlag(!flag)
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
  }, [searchValue, todos])


  //Handle login
  const handleLogin = (e) => {
    console.log(username, password)
  };

  return (
    <>
      <div className='header_container'>
        <Header
          handleSearch={handleSearch}
        />
        <Login
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin} />
      </div>
      <PendingTasks
        createTodo={createTodo}
        toDos={todos}
        isCompleted={isCompleted}
        deleteTodo={deleteTodo}
        newTodo={newTodo}
        setNewtodo={setNewtodo}
        todoList={todoList}
      />
      <CompletedTask
        toDos={todos}
        isCompleted={isCompleted}
        deleteTodo={deleteTodo}
      />
    </>
  );
}

export default App;