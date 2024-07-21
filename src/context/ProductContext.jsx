import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const ProductContext = createContext()

const ProductProvider = ({ children }) => {
    const [state, setState] = useState([])

    const getData = async () => {
        try {
            const response = await axios.get('https://95ab4698578ffc38.mokky.dev/AllProducts')
            setState(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <ProductContext.Provider value={{ state }}>{children}</ProductContext.Provider>
    )
}

export default ProductProvider