import React, { useState } from 'react'
import "../style/login.css"
import '../style/newUser.css'
import NewUser from './NewUser'

const Login = ({ handleLogin, username, password, setUsername, setPassword }) => {

  const [isDisplayed, setIsDisplayed] = useState(false)
  const handleDisplayForm = () => {
    setIsDisplayed(!isDisplayed)
  }

  return (
    <div className='login_info_container'>
      <form
        className='login_form'
        onSubmit={handleLogin}
      >
        <input
          required
          value={username}
          onChange={({ target }) => setUsername(target.value)}
          className='login_user'
          type={'text'}
        />
        <input
          required
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          className='login_password'
          type={'password'}
        />

        <button type='submit'>login</button>
      </form >
      <div className='new_user_modal'>
        <button
          type='button'
          className='display_newUser_form'
          onClick={handleDisplayForm}
        >
          new user? click here</button>
        <NewUser
          isDisplayed={isDisplayed}
          setIsDisplayed={setIsDisplayed} />
      </div>
    </div>
  )
}

export default Login