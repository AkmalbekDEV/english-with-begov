import React from 'react'
import Hero from '../components/Hero'
import Brands from '../components/Brands'
import Amenities from '../components/About'
import Courses from '../components/Courses'
import Teachers from '../components/Teachers'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div>
      <div className='max-w-[1250px] mx-auto'>
        <Hero />
        <Brands />
        <Amenities />
      </div>
      <div className='bg-[#f7b602] py-10 mt-5' id='courses'>
        <div className='max-w-[1250px] mx-auto'>
          <Courses />
        </div>
      </div>
      <div className='max-w-[1250px] mx-auto'>
        <Teachers />
      </div>
      <div id='contact' className='max-w-[1250px] mx-auto'>
        <Contact />
      </div>
    </div>
  )
}

export default Home