import React from 'react'
import { useTranslation } from 'react-i18next'
import { BsInstagram, BsYoutube } from 'react-icons/bs'

const Social = () => {
    const [t, i18n] = useTranslation("global")

    return (
        <div>
            <div className='grid gap-10 mt-20'>
                <h1 className='text-5xl text-center font-bold'>{t("footer.grid1.title")}</h1>
                <div className='flex items-center justify-center gap-10'>
                    <a href="https://instagram.com/english_with_begov">
                        <BsInstagram size={80} color='blue' />
                    </a>
                    <a href="https://www.youtube.com/@TOPLC-xl4bk">
                        <BsYoutube size={100} color='blue' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Social