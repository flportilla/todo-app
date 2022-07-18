import React from 'react'
import "../style/notification.css"

const Notification = ({ action }) => {

  return (
    <div className='notification_modal'>{action}</div>
  )
}

export default Notification