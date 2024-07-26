import React from 'react'
import Hero from '../components/Hero'
import Amenities from '../components/About'
import Courses from '../components/Courses'
import Teachers from '../components/Teachers'
import Contact from '../components/Contact'
import Social from '../components/Social'

const Home = () => {
  return (
    <div>
      <div className='max-w-[1250px] mx-auto'>
        <Hero />
        {/* <Amenities /> */}
      </div>
      <div className='max-w-[1250px] mx-auto'>
        <Teachers />
      </div>
      <div className='bg-blue-600 py-10 mt-5' id='courses'>
        <div className='max-w-[1250px] mx-auto'>
          <Courses />
        </div>
      </div>
      <div id='contact' className='max-w-[1250px] mx-auto'>
        <Contact />
        <Social />
      </div>
    </div>
  )
}

export default Home