import React from 'react'
import { useTranslation } from 'react-i18next'
import TypewriterComponent from 'typewriter-effect'

const Hero = () => {
    const [t, i18n] = useTranslation("global")

    return (
        <section id='home' className='flex items-center justify-center py-20 mt-24'>
            <div className='grid gap-6'>
                <h1 className='text-blue-800 font-bold text-7xl'>
                    <TypewriterComponent
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 40,
                            strings: [
                                `${t("hero.title")}`,
                                `${t("hero.motto")}`,
                            ],
                        }}
                    />
                </h1>
            </div>
        </section>
    )
}

export default Hero