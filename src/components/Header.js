import React from 'react'
import '../style/header.css'

const Header = ({ handleSearch }) => {

  return (
    <div className='header_container'>
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
      <div> """""login credentials""""" </div>
    </div>
  )
}

export default Header