import React from 'react'

const Login = () => {


  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "5px",
    }}>
      <form className='login_form'>
        <label htmlFor='user_name'>
          User
        </label>
        <input
          className='login_user'
          type={'text'} />
        <label htmlFor='user_name'>
          Password
        </label>
        <input
          className='login_password'
          type={'password'} />
        <button type='submit'>login</button>
      </form >
      <a href='/'>new user? click here</a>
    </div>
  )
}

export default Login