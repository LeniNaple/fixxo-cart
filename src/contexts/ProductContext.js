import { createContext } from 'react'
import { useContext, useState } from 'react'

const ProductContext = createContext()

export const useProductContext = () => {
    return useContext(ProductContext)
}


export const ProductProvider = ({children}) => {
    const url = 'https://win22-webapi.azurewebsites.net/api/products'
    const [product, setProduct] = useState({})
    const [products, setProducts] = useState([])
    const [featured, setFeatured] = useState([])
    const [flash, setFlash] = useState([])

    const getProducts = async () => {
        const res = await fetch(url)
        setProducts(await res.json())
    }

    const getFeatured = async (take = 0) => {
        const res = await fetch(url + `?take=${take}`)
        setFeatured(await res.json())
    }

    const getFlash = async (take = 0) => {
        const res = await fetch(url + `?take=${take}`)
        setFlash(await res.json())
    }

    const getProduct = async (articleNumber) => {
        const res = await fetch(url + `/${articleNumber}`)
        setProduct(await res.json())
    }

    return <ProductContext.Provider value={{product, products, featured, flash, getProduct, getProducts, getFeatured, getFlash}}>
        {children}
        </ProductContext.Provider>
    
}