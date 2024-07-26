import axios from 'axios'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const Contact = () => {
    const [number, setNumber] = useState("")
    const [errorMsg, setErrorMsg] = useState("")
    const [t, i18n] = useTranslation("global")

    const handleData = (e) => {
        e.preventDefault()

        if (number.length < 9) {
            setErrorMsg("The number is invaild")
            return;
        } else if (number.length > 17) {
            setErrorMsg("The number is invaild")
            return;
        } else (
            alert("Your informations are succesfully saved!")
        )

        const token = "7492348474:AAEBVEuc9MWLURTMkBPcjstwydBKiG9NTx4"
        const chat_id = "-4237862615"
        const my_text = `
            NEW CUSTOMER ‼️
            📲 Number: ${number},
            🎛 Wanted: Get information about courses.
        `;
        const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(my_text)}`

        axios.get(url)
            .then((response) => {
                console.log('Message sent', response.data);
            })
            .catch((error) => {
                console.error('Error sending message', error);
            });

        setNumber("")
        setErrorMsg("")
    }

    return (
        <div className='flex items-center justify-center bg-[#06052e] h-[500px] max-sm:h-[400px] rounded-3xl mt-20 px-32 max-sm:px-0 max-sm:mx-5'>
            <div className='grid gap-7 max-sm:gap-4'>
                <h1 className='text-white text-5xl font-semibold text-center  max-sm:text-2xl max-sm:mx-5'>{t("contact.title")}</h1>
                <h1 className='text-gray-500 text-2xl font-normal text-center max-sm:text-xl max-sm:px-5'>{t("contact.desc")}</h1>
                <div className='flex justify-center'>
                    <form onSubmit={handleData} className='w-[70%] flex  items-center gap-5 max-sm:gap-1 rounded-2xl bg-white'>
                        <input onChange={(e) => setNumber(e.target.value)} value={number} name='number' type="text" placeholder={t("contact.inputValue")} className='w-[70%] max-sm:w-[65%] h-[60px] pl-5 text-lg text-black rounded-l-xl rounded-bl-xl outline-none' />
                        <button className='w-[25%] max-sm:w-[30%] h-[40px] rounded-xl bg-blue-700 text-white'>{t("contact.inputBtn")}</button>
                    </form>
                </div>
                <p className='text-xl font-medium text-red-500 text-center'>{errorMsg}</p>
            </div>
        </div>
    )
}

export default Contact