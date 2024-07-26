import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import { useTranslation } from 'react-i18next'

const Amenities = () => {
    const [t, i18n] = useTranslation("global")

    return (
        <section id='about' className='grid gap-5 pb-16'>
            <h1 className='text-center font-bold text-5xl'>{t("about.title")}</h1>
            <h2 className='text-center font-medium text-xl text-gray-500 mx-72 max-sm:mx-5'>{t("about.desc")}</h2>
            <div className='flex items-center justify-between mt-10 max-sm:flex-col max-sm:gap-10'>
                <div className='rounded-xl shadow-2xl p-5 grid w-[280px] h-[280px]'>
                    <img src="https://cdn-icons-png.flaticon.com/512/10307/10307920.png" alt="" className='w-10' />
                    <h1 className='text-xl font-medium'>{t("about.cardTitle1")}</h1>
                    <h2 className='text-lg text-gray-500'>{t("about.cardDesc1")}</h2>
                </div>
                <div className='rounded-xl shadow-2xl p-5 grid w-[280px] h-[280px]'>
                    <img src="https://cdn-icons-png.flaticon.com/512/3688/3688571.png" alt="" className='w-10' />
                    <h1 className='text-xl font-medium'>{t("about.cardTitle2")}</h1>
                    <h2 className='text-lg text-gray-500'>{t("about.cardDesc2")}</h2>
                </div>
                <div className='rounded-xl shadow-2xl p-5 grid w-[280px] h-[280px]'>
                    <img src="https://cdn-icons-png.flaticon.com/512/4395/4395329.png" alt="" className='w-10' />
                    <h1 className='text-xl font-medium'>{t("about.cardTitle3")}</h1>
                    <h2 className='text-lg text-gray-500'>{t("about.cardDesc3")}</h2>
                </div>
                <div className='rounded-xl shadow-2xl p-5 grid w-[280px] h-[280px]'>
                    <img src="https://cdn-icons-png.flaticon.com/512/3768/3768983.png" alt="" className='w-10' />
                    <h1 className='text-xl font-medium'>{t("about.cardTitle4")}</h1>
                    <h2 className='text-lg text-gray-500'>{t("about.cardDesc4")}</h2>
                </div>
            </div>
        </section>
    )
}

export default Amenities