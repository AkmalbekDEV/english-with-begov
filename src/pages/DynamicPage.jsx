import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { BiUser } from 'react-icons/bi'
import { BsArrowRight, BsDot, BsWatch } from 'react-icons/bs'
import { GiPriceTag, GiTeacher } from 'react-icons/gi'
import { TbTimeline } from 'react-icons/tb'
import { useNavigate, useParams } from 'react-router-dom'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'

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
            <div className='flex items-center gap-3 max-sm:ml-8'>
                <a href="/" className='hover:underline'>Asosiy</a>
                <p><BsArrowRight /></p>
                <a href="" className='hover:underline'>{data.title}</a>
            </div>
            <div className='mt-8 flex items-center gap-20 max-sm:gap-10 max-sm:flex-col max-sm:px-10 max-sm:text-center'>
                <img src={data.img} className='w-[40%] max-sm:w-full border-4 rounded-xl border-blue-700' alt="" />
                <div className='grid gap-5'>
                    <p className='text-xl font-medium'>{data.desc}</p>
                </div>
            </div>
            <div className='mt-20 grid grid-cols-3 max-sm:grid-cols-1 max-sm:px-5 gap-10 content-center'>
                <div className='rounded-xl shadow-2xl bg-white p-5 w-fit'>
                    <div className='flex items-center gap-3'>
                        <h1 className='px-3 py-1 text-white rounded-[50%] w-fit bg-blue-500'>1</h1>
                        <h1 className='text-xl font-medium'>{data.contentTitleG}</h1>
                    </div>
                    <div className='grid h-[82%] content-between mt-3'>
                        <div className='flex items-center'>
                            <BsDot color='black' size={30} />
                            <h1 className='text-lg font-medium text-black'>{data.content1G}</h1>
                        </div>
                        <div className='flex items-center'>
                            <BsDot color='black' size={30} />
                            <h1 className='text-lg font-medium text-black'>{data.content2G}</h1>
                        </div>
                        <div className='flex items-center'>
                            <BsDot color='black' size={30} />
                            <h1 className='text-lg font-medium text-black'>{data.content3G}</h1>
                        </div>
                        <div className='flex items-center'>
                            <BsDot color='black' size={30} />
                            <h1 className='text-lg font-medium text-black'>{data.content4G}</h1>
                        </div>
                    </div>
                </div>
                <div className='rounded-xl shadow-2xl bg-white p-5 w-fit'>
                    <div className='flex items-center gap-3'>
                        <h1 className='px-3 py-1 text-white rounded-[50%] w-fit bg-blue-500'>2</h1>
                        <h1 className='text-xl font-medium'>{data.contentTitleV}</h1>
                    </div>
                    <div className='grid h-[72%] content-between mt-3'>
                        <div className='flex items-center'>
                            <BsDot color='black' size={30} />
                            <h1 className='text-lg font-medium text-black'>{data.content1V}</h1>
                        </div>
                        <div className='flex items-center'>
                            <BsDot color='black' size={30} />
                            <h1 className='text-lg font-medium text-black'>{data.content2V}</h1>
                        </div>
                        <div className='flex items-center'>
                            <BsDot color='black' size={30} />
                            <h1 className='text-lg font-medium text-black'>{data.content3V}</h1>
                        </div>
                        <div className='flex items-center'>
                            <BsDot color='black' size={30} />
                            <h1 className='text-lg font-medium text-black'>{data.content4V}</h1>
                        </div>
                    </div>
                </div>
                <div className='rounded-xl shadow-2xl bg-white p-5 w-fit'>
                    <div className='flex items-center gap-3'>
                        <h1 className='px-3 py-1 text-white rounded-[50%] w-fit bg-blue-500'>3</h1>
                        <h1 className='text-xl font-medium'>{data.contentTitleL}</h1>
                    </div>
                    <div className='grid h-[82%] content-between mt-3'>
                        <div className='flex items-center'>
                            <BsDot color='black' size={30} />
                            <h1 className='text-lg font-medium text-black'>{data.content1L}</h1>
                        </div>
                        <div className='flex items-center'>
                            <BsDot color='black' size={30} />
                            <h1 className='text-lg font-medium text-black'>{data.content2L}</h1>
                        </div>
                        <div className='flex items-center'>
                            <BsDot color='black' size={30} />
                            <h1 className='text-lg font-medium text-black'>{data.content3L}</h1>
                        </div>
                        <div className='flex items-center'>
                            <BsDot color='black' size={30} />
                            <h1 className='text-lg font-medium text-black'>{data.content4L}</h1>
                        </div>
                    </div>
                </div>
                <div className='rounded-xl shadow-2xl bg-white p-5 w-fit'>
                    <div className='flex items-center gap-3'>
                        <h1 className='px-3 py-1 text-white rounded-[50%] w-fit bg-blue-500'>4</h1>
                        <h1 className='text-xl font-medium'>{data.contentTitleS}</h1>
                    </div>
                    <div className='grid h-[82%] content-between mt-3'>
                        <div className='flex items-center'>
                            <BsDot color='black' size={30} />
                            <h1 className='text-lg font-medium text-black'>{data.content1S}</h1>
                        </div>
                        <div className='flex items-center'>
                            <BsDot color='black' size={30} />
                            <h1 className='text-lg font-medium text-black'>{data.content2S}</h1>
                        </div>
                        <div className='flex items-center'>
                            <BsDot color='black' size={30} />
                            <h1 className='text-lg font-medium text-black'>{data.content3S}</h1>
                        </div>
                        <div className='flex items-center'>
                            <BsDot color='black' size={30} />
                            <h1 className='text-lg font-medium text-black'>{data.content4S}</h1>
                        </div>
                    </div>
                </div>
                <div className='rounded-xl shadow-2xl bg-white p-5 w-fit'>
                    <div className='flex items-center gap-3'>
                        <h1 className='px-3 py-1 text-white rounded-[50%] w-fit bg-blue-500'>4</h1>
                        <h1 className='text-xl font-medium'>{data.tableTitle}</h1>
                    </div>
                    <div className='grid h-[82%] content-between mt-3'>
                        <div className='flex items-center'>
                            <BsDot color='black' size={30} />
                            <h1 className='text-lg font-medium text-black'>{data.table1}</h1>
                        </div>
                        <div className='flex items-center'>
                            <BsDot color='black' size={30} />
                            <h1 className='text-lg font-medium text-black'>{data.table2}</h1>
                        </div>
                        <div className='flex items-center'>
                            <BsDot color='black' size={30} />
                            <h1 className='text-lg font-medium text-black'>{data.table3}</h1>
                        </div>
                    </div>
                </div>
                <form id='ref' onSubmit={handleData} className='rounded-xl shadow-xl w-[400px] h-[300px] max-sm:w-[360px] p-5 grid gap-5 bg-blue-700'>
                    <h1 className='text-center text-2xl font-medium text-white'>{t("dynamicPage.subTitle")}</h1>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" required name='name' placeholder={t("dynamicPage.subName")} className='w-full py-2 pl-5 text-lg border-2 rounded-xl outline-none' />
                    <input defaultValue={"+998"} value={number} onChange={(e) => setNumber(e.target.value)} type="tel" required name='number' placeholder={t("dynamicPage.subNumber")} className='w-full py-2 pl-5 text-lg border-2 rounded-xl outline-none' />
                    <div className='flex justify-center'>
                        <button className='w-[50%] hover:shadow-md hover:shadow-yellow-500 transition-all rounded-xl text-white text-lg font-medium bg-[#f7b602] py-2'>{t("dynamicPage.subBtn")}</button>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default DynamicPage