import React, { useState } from 'react'
import Logo from '../assets/logo.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { BsArrowDown } from 'react-icons/bs'
import ReactCountryFlag from 'react-country-flag'
import { useTranslation } from 'react-i18next'
import { FaTimes } from 'react-icons/fa'
import { CiMenuFries } from 'react-icons/ci'

const Navbar = () => {
  const [t, i18n] = useTranslation("global")
  const [click, setClick] = useState(false)
  const navigate = useNavigate()

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  };

  const handleClick = () => {
    setClick(!click)
  }

  const content = <>
    <div className='sm:hidden block absolute top-20 w-full left-0 right-0 bg-white shadow-xl transition-all'>
      <ul className='text-center text-xl px-20 py-10'>
        <Link to={"/"}>
          <li className='transition-all my-4 py-4 border-b border-gray-400 hover:bg-gray-200 hover:rounded hover:border-blue-600'>{t("header.navlink1")}</li>
        </Link>
        <Link to={"/courses"}>
          <li className='transition-all my-4 py-4 border-b border-gray-400 hover:bg-gray-200 hover:rounded hover:border-blue-600'>{t("header.navlink2")}</li>
        </Link>
        <Link to={"/teachers"}>
          <li className='transition-all my-4 py-4 border-b border-gray-400 hover:bg-gray-200 hover:rounded hover:border-blue-600'>{t("header.navlink3")}</li>
        </Link>
      </ul>
    </div>
  </>

  return (
    <section className='shadow-md fixed w-full top-0 left-0 z-50 bg-white'>
      <div className='max-w-[1250px] mx-auto'>
        <div className='flex justify-center items-center w-full'>
          <div className='flex items-center gap-2 max-sm:ml-5'>
            <img onClick={() => navigate('/')} src={Logo} alt="" className='w-[100px] cursor-pointer' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Navbar