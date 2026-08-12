import React from 'react'
import { useParams } from 'react-router'

const ProductView = () => {

  const {id} = useParams();
  
  const products = JSON.parse(localStorage.getItem('product'))

  const product = products[id]

  return (
    <>

  <h2 className='text-center'>ProductView Page</h2>

    <section className='flex justify-center'>
    <div className='flex border border-gray-400 w-[250px] rounded'>
      <img src={product?.image} alt="" width={150} className='rounded'/>
      <div>
        <h2>{product?.name}</h2>
        <span>{product?.price}</span>
        <p>{product?.description}</p>
      </div>
    </div>

    </section>

    </>
  )
}

export default ProductView