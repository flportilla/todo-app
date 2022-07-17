import React from 'react'
import "../style/login.css"
import '../style/newUser.css'
import NewUser from './NewUser'

const Login = ({ handleLogin, username, password, setUsername, setPassword }) => {


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
        <a href='/'>new user? click here</a>
        <NewUser />
      </div>
    </div>
  )
}

export default Login