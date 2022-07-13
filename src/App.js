import React, { useState, useMemo } from 'react';
import CompletedTask from './components/CompletedTask';
import Header from './components/Header';


function App() {
  const [searchValue, setSearchValue] = useState('')
  const [todos, setTodos] = useState([
    {
      id: 1,
      name: "ToDo 1",
      isComplete: false
    },
    {
      id: 2,
      name: "ToDo 2",
      isComplete: true
    },
    {
      id: 3,
      name: "ToDo 3",
      isComplete: true
    },
    {
      id: 4,
      name: "ToDo 4",
      isComplete: false
    },
    {
      id: 5,
      name: "ToDo 5",
      isComplete: true
    },
    {
      id: 6,
      name: "ToDo 6",
      isComplete: false
    },
    {
      id: 7,
      name: "ToDo 7",
      isComplete: true
    },
    {
      id: 8,
      name: "ToDo 8",
      isComplete: false
    },
    {
      id: 9,
      name: "ToDo 9",
      isComplete: true
    }
  ])

  //Check if the todos are marked as completed or not and change the list acordingly
  const isCompleted = (id) => {
    const selectedTodo = todos.find(todo => todo.id === Number(id))
    const changedTodo = { ...selectedTodo, isComplete: !selectedTodo?.isComplete }

    setTodos(todos.map(todo => todo.id !== id ? todo : changedTodo))

  }

  //Handle the delete of todos on click
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== Number(id)))
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

  return (
    <>
      <Header
        handleSearch={handleSearch}
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
