import React from 'react'
import Product from '../components/Product'

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

  return (
    <>

    <Product data={product}/>

    </>
  )
}

export default Home