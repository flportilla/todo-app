import React from 'react'
import "../style/login.css"

const LoggedInfo = ({ userName, handleLogOut }) => {
  return (
    <>
      <div className='logged_info'
      >
        <span>Welcome</span>
        <span>{userName}</span>
        <button onClick={handleLogOut}>Logout</button>
        <span >---</span>
      </div>
    </>
  )
}

export default LoggedInfo