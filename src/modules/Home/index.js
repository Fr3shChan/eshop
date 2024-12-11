import React, { useEffect, useState } from 'react'
import Hero from '../../components/Hero'
import Products from '../../components/ProductsCard'
import Feature from '../../components/Features'
import Stats from '../../components/Stats'
import ProductsCard from '../../components/ProductsCard'


const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products?limit=12')
            const data = await response.json()
            console.log(data)
            setProducts(data)
        }
        fetchProducts()
    }, [])


    return (
        <>
            <Hero />
            <Feature />
            <div className="flex flex-col text-center w-full mt-20">
                <h2 className="text-xs text-green-500 tracking-widest font-medium title-font mb-1">PRODUKTY</h2>
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">NAJPOPULARNIEJSZE PRODUKTY</h1>
            </div>
            {
                products.length > 0 ?
                <ProductsCard products={products} />
                :
                <div>Loading...</div>
            }
            <Products />          
            <Stats/>            
        </>
    )
}

export default Home