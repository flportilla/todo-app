import React from 'react'
import '../style/header.css'

const Header = ({ handleSearch }) => {

  return (
    <>
      <a href='/'>Home</a>
      <form>
        <label htmlFor='searchBar'>
          Search
          <input
            id='searchBar'
            type='text'
            onChange={(e) => handleSearch(e)}
          />
        </label>
      </form>
    </>
  )
}

export default Header