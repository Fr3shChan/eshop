import React, { useEffect, useState } from 'react'
import ProductsCard from '../../components/ProductsCard'
import Feature from '../../components/Features'

const Products = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        const fetchCategories = async () => {
            const response = await fetch('https://fakestoreapi.com/products/categories')
            const data = await response.json()
            console.log(data)
            setCategories(data)
        }
        fetchCategories()
    }, [])

    if (categories.length === 0) return <div>Ładowanie...</div>


    return (
        <div>
            <Feature cards={categories} />
            <ProductsCard />
        </div>
    )
}

export default Products