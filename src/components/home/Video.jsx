import React from 'react'
const Video = () => {
  return (
    <div className='h-full w-full '>
        <video autoPlay loop muted src="/home.webm" className='h-full w-full object-cover'></video>
    </div>
  )
}

export default Video