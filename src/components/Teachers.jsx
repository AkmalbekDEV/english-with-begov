import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import { useTranslation } from 'react-i18next'
import Begov from '../assets/begov.jpg'

const Teachers = () => {
    const [t, i18n] = useTranslation("global")

    return (
        <section id='teachers' className='grid gap-10 mt-20'>
            <div className='grid gap-5'>
                <h1 className='text-center font-bold text-5xl'>{t("teachers.title")}</h1>
                <h2 className='text-center font-medium text-xl text-gray-500 mx-72 max-sm:mx-5'>{t("teachers.desc")}</h2>
            </div>
            <div className='flex items-center justify-evenly max-sm:px-5'>
                <div className='p-5 rounded-xl bg-white shadow-2xl w-[50%] max-sm:w-full grid gap-5 content-between'>
                    <div className='flex items-center gap-5'>
                        <img src={Begov} alt="" className='w-14 rounded-[50%]' />
                        <div className='grid'>
                            <h1 className='text-xl font-medium'>{t("teachers.name")}</h1>
                            <h1 className='text-lg font-medium text-gray-500'>{t("teachers.type")}</h1>
                        </div>
                    </div>
                    <h2 className='text-lg font-medium text-gray-500'>{t("teachers.teacherDesc")}</h2>
                    <h1 className='text-xl font-medium'>{t("teachers.time")}</h1>
                </div>
            </div>
        </section>
    )
}

export default Teachers