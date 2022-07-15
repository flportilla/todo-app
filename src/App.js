import React, { useState, useMemo, useEffect } from 'react';
import CompletedTask from './components/CompletedTask';
import Header from './components/Header';
import Login from './components/Login';
import PendingTasks from './components/PendingTasks'
import todoService from './services/todos'
import loginService from './services/login'
import './style/header.css'

function App() {
  const [searchValue, setSearchValue] = useState('')
  const [todos, setTodos] = useState([])
  const [newTodo, setNewtodo] = useState('')
  const [flag, setFlag] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  useEffect(() => {

    const loggedUserJSON = window.localStorage.getItem('loggerTodoUser')

    if (JSON.parse(loggedUserJSON)) {
      const user = JSON.parse(loggedUserJSON)
      todoService.setToken(user.token)

      todoService
        .getTodos()
        .then(todos => setTodos(todos))

    }
  }, [flag, user])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggerTodoUser')

    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      todoService.setToken(user.token)
    }
  }, [])

  //Check if the todos are marked as completed or not and change the list acordingly
  const isCompleted = async (id) => {

    const selectedTodo = todos.find(todo => todo.id === id)
    const changedTodo = { ...selectedTodo, isComplete: !selectedTodo.isComplete }

    await todoService.markAsComplete(id, changedTodo)
    setFlag(!flag)
  }
  //Handle the delete of todos on click
  const deleteTodo = async (id) => {
    await todoService
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

    await todoService.addTodo(newTodoObj)
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
  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const user = await loginService.login({
        username, password
      })

      window.localStorage.setItem(
        'loggerTodoUser', JSON.stringify(user)
      )

      todoService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')

    } catch (exception) {
      console.log(exception)
    }

  };
  const handleLogOut = () => {
    setUser(null)
    window.localStorage.clear()
    window.location.reload()
  }

  return (
    <>
      <div className='header_container'>
        <Header
          handleSearch={handleSearch}
        />
        {
          user === null
            ? <Login
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
              handleLogin={handleLogin} />
            : <>
              <div className='logged_info'
              >
                Welcome {user.name}
                <button onClick={handleLogOut}>Logout</button>
              </div>

            </>
        }
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