import React from 'react'

const Product = ({data}) => {

  console.log(data)
  // null undefined

  return (
    <>
      {data?.map((product)=>(
       <div>
        <img src={product?.image} alt="" />
        <h1>{product?.title}</h1>
        <h3>{product?.price}</h3>
        <p>{product?.description}</p>
       </div>
      ))}


    </>
  )
}

export default Product