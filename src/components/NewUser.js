import React from 'react'
import '../style/newUser.css'

const NewUser = () => {
  return (
    <div className='new_user_form_container'>
      <form className='new_user_form'>
        <label htmlFor='username'>
          Username
        </label>
        <input
          name='username'
          id='username'
          type={'text'}
          minLength={5}
          required
        />
        <label htmlFor='name'>
          Name
        </label>
        <input
          name='name'
          id='name'
          type={'text'}
          minLength={5}
          required
        />
        <label htmlFor='password'>
          Password
        </label>
        <input
          name='password'
          id='password'
          type={'password'}
          minLength={5}
          required
        />
        <label htmlFor='password'>
          Repeat password
        </label>
        <input
          name='password'
          id='password'
          type={'password'}
          minLength={5}
          required
        />
      </form>
    </div>
  )
}

export default NewUser