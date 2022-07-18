import React, { useState } from 'react'
import '../style/newUser.css'
import newUserService from '../services/newUser'

const NewUser = ({ isDisplayed, setIsDisplayed }) => {
  const [newUser, setNewUser] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [newName, setNewName] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')

  const handeUserCreation = async (e) => {
    e.preventDefault();
    if (newPassword !== repeatPassword) return alert("Passwords don't match")

    const newUserObj =
    {
      "username": newUser,
      "name": newName,
      "password": newPassword
    }
    try {
      const user = await newUserService.createuser(newUserObj)
      alert('user created')
      setNewUser('')
      setNewPassword('')
      setNewName('')
      setRepeatPassword('')
      setIsDisplayed(!isDisplayed)

    } catch (error) {
      alert('User already exist')
    }
  }

  return (
    <div className={isDisplayed ? 'new_user_form_container' : 'new_user_form_container hide'}>
      <form
        className='new_user_form'
        onSubmit={handeUserCreation}
      >
        <label htmlFor='username'>
          New Username*
        </label>
        <input
          value={newUser}
          onChange={({ target }) => setNewUser(target.value)}
          placeholder='Username'
          name='username'
          id='username'
          type={'text'}
          minLength={3}
          required
        />
        <label htmlFor='name'>
          Name*
        </label>
        <input
          value={newName}
          onChange={({ target }) => setNewName(target.value)}
          placeholder='Name'
          name='name'
          id='name'
          type={'text'}
          minLength={3}
          required
        />
        <label htmlFor='password'>
          New Password*
        </label>
        <input
          value={newPassword}
          onChange={({ target }) => setNewPassword(target.value)}
          placeholder='Password'
          name='password'
          id='password'
          type={'password'}
          minLength={3}
          required
        />
        <label htmlFor='password'>
          Repeat password*
        </label>
        <input
          value={repeatPassword}
          onChange={({ target }) => setRepeatPassword(target.value)}
          placeholder='Repeat password'
          name='password'
          type={'password'}
          minLength={3}
          required
        />
        <button
          type='submit'>
          Create new user
        </button>
      </form>
    </div>
  )
}

export default NewUser