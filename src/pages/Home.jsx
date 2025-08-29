import React from 'react'
import Video from "../components/home/Video"
import HeroText from "../components/home/HeroText"
import Footer from "../components/home/Footer"

const Home = () => {
  return (
    <div className='w-full h-screen'>
      <div className='h-full w-full fixed'>
        <Video />
      </div>
      <div className='h-full w-full relative flex flex-col justify-between'>
          <HeroText />
          <Footer />
      </div>
    </div>
  )
}

export default Home