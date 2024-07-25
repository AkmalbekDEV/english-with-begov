import { useConst } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import { useTranslation } from 'react-i18next'
import Begov from '../assets/begov.jpg'

const TeachersPage = () => {
    const [t, i18n] = useTranslation("global")

    return (
        <div className='max-w-[1250px] mx-auto'>
            <div className='mt-36 grid gap-10 max-sm:px-5'>
                <div className='flex max-sm:flex-col gap-10 max-sm:gap-5 items-center px-8 py-5 max-sm:px-5 max-sm:py-5 rounded-xl shadow-2xl'>
                    <img src={Begov} className='w-[45%] max-sm:w-full rounded-2xl' alt="" />
                    <div className='grid content-between h-[80%] max-sm:gap-5 max-sm:text-center'>
                        <h1 className='text-4xl font-bold'>{t("teachers.name")}</h1>
                        <h1 className='text-2xl font-medium'>{t("teachers.type")}</h1>
                        <h1 className='text-xl font-medium'>{t("teachers.time")}</h1>
                        <p className='text-2xl font-medium text-gray-500'>{t("teachers.teacherDesc")}</p>
                        <button className='px-10 py-3 max-sm:w-full hover:shadow-md hover:shadow-blue-500 transition-all active:bg-blue-900 rounded-xl w-fit bg-blue-700 text-lg font-medium text-white'>{t("teachers.btn")}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeachersPage