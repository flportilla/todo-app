import React from 'react'

const Login = ({ handleLogin, username, password, setUsername, setPassword }) => {


  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "5px",
    }}>
      <form
        className='login_form'
        onSubmit={handleLogin}
      >
        <label htmlFor='user_name'
        >
          User
        </label>

        <input
          value={username}
          onChange={({ target }) => setUsername(target.value)}
          className='login_user'
          type={'text'}
        />

        <label htmlFor='user_name'
        >
          Password
        </label>

        <input
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          className='login_password'
          type={'password'}
        />

        <button type='submit'>login</button>
      </form >
      <a href='/'>new user? click here</a>
    </div>
  )
}

export default Login