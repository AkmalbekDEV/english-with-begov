import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import { useTranslation } from 'react-i18next'
import Begov from '../assets/begov.jpg'

const Teachers = () => {
    const [t, i18n] = useTranslation("global")

    return (
        <section id='teachers' className='grid gap-10 mt-5 mb-20'>
            <div className='flex max-sm:flex-col-reverse gap-16 max-sm:gap-10 items-center px-8 py-5 max-sm:px-5 max-sm:py-5'>
                <div className='grid content-between gap-10 max-sm:gap-5 max-sm:text-center'>
                    <h1 className='text-4xl font-bold'>Hi, I'm <span className='text-blue-700'>Begov Dostonbek</span></h1>
                    <p className='text-lg font-medium text-gray-500'>
                        Men 2018 yil avgust oyida Xitoyning Shanghai shahrida joylashgan CTP Teaching Centre o'quv markazida ilk ish faoliyatimni boshlaganman va 2020 yil yanvarigacha u yerda ishlaganman. <div className='my-2'></div> Keyin esa O'zbekistonga qaytib, Urganch shahrida o'z o'quv kurslarimni ochdim va shu paytgacha 3000 dan ortiq o'quvchiga dars berib ularni yaxshi natijalarga erishishida yordam berib kelmoqdaman. <div className='my-2'></div> Bizning kurslarimizda zamonaviy o'qitish uslublari qo'llaniladi va har bir talabaning individual ehtiyojlariga e'tibor qaratiladi. O'quvchilarimiz qisqa vaqt ichida sezilarli natijalarga erishishadi va ingliz tilini erkin suhbatlashish darajasida o'rganishadi.
                    </p>
                </div>
                <img src={Begov} className='w-[35%] max-sm:w-full rounded-2xl' alt="" />
            </div>
        </section>
    )
}

export default Teachers