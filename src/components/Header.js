import React from 'react'
import '../style/header.css'

const Header = ({ handleSearch }) => {

  return (
    <>
      <a href='/'>Home</a>
      <form
        className='search_form'
        onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='searchBar'>
          Search
        </label>
        <input
          className='search_bar'
          id='searchBar'
          type='text'
          onChange={(e) => handleSearch(e)}
        />
      </form>
    </>
  )
}

export default Header