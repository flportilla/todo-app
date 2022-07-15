import React from 'react'

const Login = () => {
  return (
    <form>
      <label htmlFor='user_name'>
        User
        <input type={'text'} />
      </label>
      <label htmlFor='user_name'>
        Password
        <input type={'password'} />
      </label>
    </form>
  )
}

export default Login