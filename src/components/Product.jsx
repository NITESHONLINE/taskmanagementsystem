import React from 'react'
import { Link } from 'react-router'

const Product = ({data}) => {

  console.log(data)
  // null undefined

  return (
    <>
      {data?.map((product,i)=>(
       <div>
        <Link to={`/${i}`}>
        <img src={product?.image} alt="" />
        </Link>
        <h1>{product?.title}</h1>
        <h3>{product?.price}</h3>
        <p>{product?.description}</p>
       </div>
      ))}


    </>
  )
}

export default Product