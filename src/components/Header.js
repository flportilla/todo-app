import React from 'react'
import '../style/header.css'

const Header = ({ handleSearch }) => {

  const clearSearch = (e) => e.target.parentElement.firstChild.lastChild.value = ''

  return (
    <div className='header_container'>
      <a href='http://localhost:3000/'>Home</a>
      <form>
        <label htmlFor='searchBar'>
          Search
          <input
            id='searchBar'
            type='text'
            onChange={(e) => handleSearch(e)}
          />
        </label>
        <button
          type='button'
          onClick={clearSearch}
        >
          Clear
        </button>
      </form>
      <div> """""login credentials""""" </div>
    </div>
  )
}
export default Header