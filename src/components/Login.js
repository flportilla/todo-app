import React from 'react'

const Login = () => {
  return (
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
    </form >
  )
}

export default Login