import React from 'react'
import { useTranslation } from 'react-i18next'

const Hero = () => {
    const [t, i18n] = useTranslation("global")

    return (
        <section id='home' className='flex items-center justify-center py-20 mt-24'>
            <div className='grid gap-6'>
                <h1 className='text-center font-bold text-6xl leading-[70px] max-sm:text-5xl max-sm:px-3'>{t("hero.title")}</h1>
                <h2 className='font-medium text-gray-500 text-xl text-center px-20 max-sm:px-10'>{t("hero.desc")}</h2>
            </div>
        </section>
    )
}

export default Hero