import React from 'react'
import { useTranslation } from 'react-i18next'

const Hero = () => {
    const [t, i18n] = useTranslation("global")

    return (
        <section id='home' className='flex items-center justify-center py-20 mt-24'>
            <div className='grid gap-6'>
                <h1 className='text-center font-bold text-6xl leading-[70px] max-sm:text-5xl px-32 max-sm:px-3'>{t("hero.title")}</h1>
            </div>
        </section>
    )
}

export default Hero