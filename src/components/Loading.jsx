import React from 'react'

export const Loading = () => {
  return (
    <div className='container-fluid vh-100 d-flex justify-content-center align-items-center'>
        <div className='row d-flex justify-content-center align-items-center'>
            <div className="spinner-grow text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>
  )
}
