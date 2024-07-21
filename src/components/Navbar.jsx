import React, { useState } from 'react'
import Logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { BsArrowDown } from 'react-icons/bs'
import ReactCountryFlag from 'react-country-flag'
import { useTranslation } from 'react-i18next'
import { ScrollElement } from 'react-scroll'
import scrollSpy from 'react-scroll'
import scrollElement from 'react-scroll/modules/mixins/scroll-element'
import { FaTimes } from 'react-icons/fa'
import { CiMenuFries } from 'react-icons/ci'

const Navbar = () => {
  const [t, i18n] = useTranslation("global")
  const [click, setClick] = useState(false)

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
          <li className='my-4 py-4 border-b border-gray-400 hover:bg-gray-200 hover:rounded hover:border-blue-600'>{t("header.navlink1")}</li>
        </Link>
        <Link to={"/courses"}>
          <li className='my-4 py-4 border-b border-gray-400 hover:bg-gray-200 hover:rounded hover:border-blue-600'>{t("header.navlink2")}</li>
        </Link>
        <Link to={"/teachers"}>
          <li className='my-4 py-4 border-b border-gray-400 hover:bg-gray-200 hover:rounded hover:border-blue-600'>{t("header.navlink3")}</li>
        </Link>
        <div>
          <Menu>
            <MenuButton className='rounded-lg bg-gray-200 px-5 py-2' as={Button} rightIcon={<BsArrowDown />}>
              {t("header.switchlang")}
            </MenuButton>
            <MenuList className='bg-gray-200 rounded-xl py-3'>
              <MenuItem onClick={() => handleChangeLanguage("eng")} className='hover:bg-gray-300 px-5 py-1 gap-2'>
                <ReactCountryFlag className="emojiFlag" countryCode="US" style={{ fontSize: '1em', lineHeight: '4em', }} aria-label="United States" svg />
                English
              </MenuItem>
              <MenuItem onClick={() => handleChangeLanguage("uz")} className='hover:bg-gray-300 px-5 py-1 gap-2'>
                <ReactCountryFlag className="emojiFlag" countryCode="UZ" style={{ fontSize: '1em', lineHeight: '4em', }} aria-label="Uzbekistan" svg />
                Uzbek
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </ul>
    </div>
  </>

  return (
    <section className='shadow-md fixed w-full top-0 left-0 z-50 bg-white'>
      <div className='max-w-[1250px] mx-auto'>
        <div className='flex justify-between items-center'>
          <div className='flex justify-between items-center w-full'>
            <div className='flex items-center gap-2 max-sm:ml-5'>
              <img src={Logo} alt="" className='w-[100px]' />
            </div>
            <nav className='flex items-center gap-7 max-sm:hidden'>
              <Link to={"/"} className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center font-medium">{t("header.navlink1")}</Link>
              <Link to={"/courses"} className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center font-medium">{t("header.navlink2")}</Link>
              <Link to={"/teachers"} className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center font-medium">{t("header.navlink3")}</Link>
            </nav>
            <div className='max-sm:hidden'>
              <Menu>
                <MenuButton className='rounded-lg bg-gray-200 px-5 py-2' as={Button} rightIcon={<BsArrowDown />}>
                  {t("header.switchlang")}
                </MenuButton>
                <MenuList className='bg-gray-200 rounded-xl py-3'>
                  <MenuItem onClick={() => handleChangeLanguage("eng")} className='hover:bg-gray-300 px-5 py-1 gap-2'>
                    <ReactCountryFlag className="emojiFlag" countryCode="US" style={{ fontSize: '1em', lineHeight: '4em', }} aria-label="United States" svg />
                    English
                  </MenuItem>
                  <MenuItem onClick={() => handleChangeLanguage("uz")} className='hover:bg-gray-300 px-5 py-1 gap-2'>
                    <ReactCountryFlag className="emojiFlag" countryCode="UZ" style={{ fontSize: '1em', lineHeight: '4em', }} aria-label="Uzbekistan" svg />
                    Uzbek
                  </MenuItem>
                </MenuList>
              </Menu>
            </div>
          </div>
          <div>
            {click && content}
          </div>
          <button className='block sm:hidden transition-all' onClick={handleClick}>
            {click ? <FaTimes size={30} className='mr-5' /> : <CiMenuFries size={30} className='mr-5' />}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Navbar