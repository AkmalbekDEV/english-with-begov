import React, { useContext } from 'react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BiUser } from 'react-icons/bi';
import { ProductContext } from '../context/ProductContext';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Courses = () => {
    const { state } = useContext(ProductContext)
    const [t, i18n] = useTranslation("global")

    return (
        <section>
            <h1 className='text-center text-white text-5xl font-medium mb-10'>{t("courses.title")}</h1>
            <div className='flex items-center justify-evenly max-sm:flex-col max-sm:px-5 max-sm:gap-10'>
                {state.map((product) => {
                    if (product.type === "courses") {
                        return (
                            <div key={product.id} className='w-[40%] max-sm:w-full rounded-xl grid gap-5 p-5 bg-white'>
                                <img src={product.img} alt="" className='w-full h-[250px] max-sm:h-[200px] rounded-xl' />
                                <h1 className='text-xl font-medium'>{product.title}</h1>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center gap-2'>
                                        <BiUser size={23} color='gray' />
                                        <h1 className='text-lg text-gray-500'>{t("courses.students")}: {product.students}</h1>
                                    </div>
                                    <h1 className='text-xl font-medium'>{product.price} {t("courses.valute")}</h1>
                                </div>
                                <Link to={`/item/${product.id}`}>
                                    <button className='w-full rounded-xl py-3 bg-blue-700 text-lg font-medium text-white hover:shadow-md hover:shadow-blue-500 transition-all'>{t("courses.btn")}</button>
                                </Link>
                            </div>
                        )
                    }
                })}
            </div>
        </section>
    )
}

export default Courses