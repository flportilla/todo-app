import React from 'react'
import '../style/header.css'

const Header = ({ handleSearch, isLogged }) => {

  return (
    <div className='search_container'>
      <a href='/'>Home</a>
      <form
        className='search_form'
        onSubmit={(e) => e.preventDefault()}>
        {
          isLogged === null
            ? ''
            : <>
              <label htmlFor='searchBar'>
                Search
              </label>
              <input
                className='search_bar'
                id='searchBar'
                type='text'
                onChange={(e) => handleSearch(e)}
              />
            </>
        }
      </form>
    </div>
  )
}

export default Header