import React from 'react'
import Product from '../components/Product'
import Addproduct from '../components/Addproduct'

// import component => ctrl + spacebar 

const Home = () => {

    const product = [
        {
            name: "Apple",
            price: 200,
            description: "Best apple",
            image: "http//;asdfdsf"
        },
        {
            name: "Apple",
            price: 200,
            description: "Best apple",
            image: "http//;asdfdsf"
        },
    ]

    const singledata = {
            name: "Orange",
            price: 200,
            description: "Best orange",
    }

  return (
    <>

    <Addproduct/>

    <Product data={product}/>

    </>
  )
}

export default Home