import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex items-center justify-end gap-4'>
      <Link className='text-[2vw] uppercase border-2 border-white rounded-full py-5 px-8 leading-[1vw] hover:-translate-y-2 hover:border-red-500 transition-all duration-200' to='/products'>Products</Link>
      <Link className='text-[2vw] uppercase border-2 border-white rounded-full py-5 px-8 leading-[1vw] hover:border-red-500 hover:-translate-y-2 transition-all duration-200' to='/about'>About</Link>
    </div>
  )
}

export default Footer