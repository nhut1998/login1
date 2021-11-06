import React from 'react'

export default function Guest({ children }) {
  return (
    <div className='d-flex align-items-center justify-content-center vh-100 vw-100'>
      {children}
    </div>
  )
}
