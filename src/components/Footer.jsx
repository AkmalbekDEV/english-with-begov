import React from 'react'
import Logo from '../assets/logo.jpg'
import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import WBS from '../assets/wbs.png'

const Footer = () => {
  const [t, i18n] = useTranslation("global")

  return (
    <div className='border-t-2 pt-14 pb-10 mt-20'>
      <div className='max-w-[1250px] mx-auto'>
        <div className='flex items-center justify-between max-sm:flex-col max-sm:gap-10 max-sm:text-center'>
          <div className='grid'>
            <div className='max-sm:flex max-sm:justify-center max-sm:flex-col'>
              <div className='max-sm:flex max-sm:justify-center'>
                <img src={Logo} alt="" className='w-[200px]' />
              </div>
              <Link to={"https://begov-for-students.vercel.app"} className='text-xl font-medium max-sm:mr-5 w-full flex items-center justify-center py-3 px-5 rounded-xl bg-gray-100'>Xolatingizni tekshiring!</Link>
            </div>
          </div>
          <div className='grid gap-3'>
            <h1 className='text-2xl font-medium'>{t("footer.grid2.title")}</h1>
            <nav className='grid gap-5'>
              <a href="/" className='text-lg font-medium text-gray-500'>{t("footer.grid2.link1")}</a>
              <a href="https://begov-for-students.vercel.app" className='text-lg font-medium text-gray-500'>Natijalar</a>
              <a href="https://www.wbsdev.uz" className='text-lg font-medium text-gray-500'>Dasturchi sayt</a>
              <a href="https://sflbfpiyifassafgasffy.vercel.app" className='text-lg font-medium text-gray-500'>To'lovlar</a>
            </nav>
          </div>
          {/* <div className='grid gap-3'>
            <h1 className='text-2xl font-medium'>{t("footer.grid3.title")}</h1>
            <nav className='grid gap-5'>
              <a href="/" className='text-lg font-medium text-gray-500'>{t("footer.grid3.resource1")}</a>
              <a href="/teachers" className='text-lg font-medium text-gray-500'>{t("footer.grid3.resource2")}</a>
              <a href="/courses" className='text-lg font-medium text-gray-500'>{t("footer.grid3.resource3")}</a>
            </nav>
          </div> */}
          <div className='grid gap-3'>
            <h1 className='text-2xl font-medium'>{t("footer.grid4.title")}</h1>
            <nav className='grid gap-5'>
              <a target='_blank' href="https://yandex.uz/maps/org/top_lc/236129718447/?ll=60.613763%2C41.566023&z=20.55" className='text-lg font-medium text-gray-500'>Manzil</a>
              <a href="mailto:akmaldevuzb@gmail.com" className='text-lg font-medium text-gray-500'>{t("footer.grid4.contact2")}</a>
              <a href="tel:+998-91-999-11-29" className='text-lg font-medium text-gray-500'>{t("footer.grid4.contact3")}</a>
            </nav>
          </div>
        </div>
      </div>
      <div className='grid gap-5 items-center justify-center mt-10'>
        <h1 className='text-center font-medium text-gray-500 text-lg'>{t("footer.about")}</h1>
        <div className='flex justify-center'>
          <div className='border-b-2 w-[500px] max-sm:w-[300px]'></div>
        </div>
        <div className='flex justify-center'>
          <Link target='_blank' to={"https://devs-community-io.vercel.app"}>
            <img src={WBS} alt="" className='w-10' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer