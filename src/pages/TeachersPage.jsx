import { useConst } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import { useTranslation } from 'react-i18next'

const TeachersPage = () => {
    const [t, i18n] = useTranslation("global")

    return (
        <div className='max-w-[1250px] mx-auto'>
            <div className='mt-36 grid gap-10 max-sm:px-5'>
                <div className='flex max-sm:flex-col gap-10 max-sm:gap-5 items-center px-8 py-5 max-sm:px-5 max-sm:py-5 rounded-xl shadow-2xl'>
                    <img src="https://scontent.ftas6-2.fna.fbcdn.net/v/t39.30808-1/363332284_1807283249724816_8784736764090120602_n.jpg?stp=dst-jpg_p480x480&_nc_cat=111&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=z2VtRPbfZvgQ7kNvgFvRaZh&_nc_ht=scontent.ftas6-2.fna&oh=00_AYCt2yJcOqnkg9eGjX8wYXzC2-1GA7v1pBXwUgBMv62THA&oe=669DDE6C" className='w-[45%] max-sm:w-full rounded-2xl' alt="" />
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