import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { BiUser } from 'react-icons/bi'
import { BsWatch } from 'react-icons/bs'
import { GiPriceTag, GiTeacher } from 'react-icons/gi'
import { TbTimeline } from 'react-icons/tb'
import { useNavigate, useParams } from 'react-router-dom'

const DynamicPage = () => {
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [t, i18n] = useTranslation("global")
    const [data, setData] = useState([])
    const params = useParams()
    const exit = useNavigate()

    const getData = async () => {
        try {
            const response = await axios.get(`https://95ab4698578ffc38.mokky.dev/AllProducts/${params.id}`)
            setData(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData()
    }, [params.id])

    const handleData = (e) => {
        e.preventDefault()

        if (number.length < 9) {
            alert("The number is invaild")
            return;
        } else if (number.length > 17) {
            alert("The number is invaild")
            return;
        } else (
            alert("Your informations are sucessfully saved!")
        )

        const token = "7492348474:AAEBVEuc9MWLURTMkBPcjstwydBKiG9NTx4"
        const chat_id = "-4237862615"
        const my_text = `
            NEW CUSTOMER ‼️
            💳 Name: ${name}
            📲 Number: ${number},
            🎛 Course Name: ${data.courseName}.
        `;
        const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(my_text)}`

        axios.get(url)
            .then((response) => {
                console.log('Message sent', response.data);
            })
            .catch((error) => {
                console.error('Error sending message', error);
            });

        setName("")
        setNumber("")
        setErrorMsg("")
    }

    return (
        <div className='max-w-[1250px] mx-auto mt-36'>
            <div className='p-7 rounded-xl shadow-2xl border max-sm:mx-5'>
                <div className='flex justify-center'>
                    <h1 onClick={() => exit(-1)} className='text-blue-500 hover:underline text-center text-xl mb-5 w-fit cursor-pointer'>{t("dynamicPage.navi")}</h1>
                </div>
                <div className='flex items-center justify-between max-sm:flex-col' data-aos="fade-up">
                    <img src={data.img} alt="" className='w-[50%] max-sm:w-full rounded-xl border-2' />
                    <div className='grid w-[45%] max-sm:w-full content-between max-sm:mt-5 h-[320px]'>
                        <h1 className='text-5xl font-bold text-blue-700'>{data.title}</h1>
                        <div className='flex items-center gap-3'>
                            <GiPriceTag size={30} color='blue' />
                            <h1 className='text-2xl font-medium'>{t("dynamicPage.price")}: {data.price} {t("dynamicPage.valute")}</h1>
                        </div>
                        <div className='flex items-center gap-3'>
                            <BiUser size={30} color='blue' />
                            <h1 className='text-2xl font-medium'>{t("dynamicPage.students")}: {data.students}</h1>
                        </div>
                        <div className='flex items-center gap-3'>
                            <GiTeacher size={30} color='blue' />
                            <h1 className='text-2xl font-medium'>{t("dynamicPage.teacher")}: {data.teacher}</h1>
                        </div>
                        <div className='flex items-center gap-3'>
                            <BsWatch size={30} color='blue' />
                            <h1 className='text-2xl font-medium'>{t("dynamicPage.continuity")}: {data.continuity} {t("dynamicPage.time")}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center mt-20'>
                <form onSubmit={handleData} className='rounded-xl shadow-xl w-[400px] max-sm:w-[360px] p-5 grid gap-5 bg-blue-700'>
                    <h1 className='text-center text-2xl font-medium text-white'>{t("dynamicPage.subTitle")}</h1>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" required name='name' placeholder={t("dynamicPage.subName")} className='w-full py-2 pl-5 text-lg border-2 rounded-xl outline-none' />
                    <input defaultValue={"+998"} value={number} onChange={(e) => setNumber(e.target.value)} type="tel" required name='number' placeholder={t("dynamicPage.subNumber")} className='w-full py-2 pl-5 text-lg border-2 rounded-xl outline-none' />
                    <div className='flex justify-center'>
                        <button className='w-[50%] hover:shadow-md hover:shadow-yellow-500 transition-all rounded-xl text-white text-lg font-medium bg-[#f7b602] py-2'>{t("dynamicPage.subBtn")}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default DynamicPage