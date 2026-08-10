import React, { useState } from 'react'

const Addproduct = () => {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescriptin] = useState("");
  const [image, setImage] = useState("");
 

  const handleSubmitProduct = (e) => {
    e.preventDefault()
    const singleProduct = {name, price, description, image}
    console.log(singleProduct)

  }
 

  return (
    <>

      <form onSubmit={handleSubmitProduct} className='shadow-md p-2 rounded-md w-[220px]'>
        <label htmlFor="">Name</label><br />
        <input type="text" value={name} onChange={(e)=> setName(e.target.value)} className='border' placeholder='Enter product name' /> <br />

        <label htmlFor="">Price</label><br />
        <input type="text" value={price} onChange={(e)=> setPrice(e.target.value)} className='border' placeholder='Enter product price' /> <br />

        <label htmlFor="">Description</label><br />
        <input type="text" value={description} onChange={(e)=> setDescriptin(e.target.value)} className='border' placeholder='Enter product description' /> <br />
       
        <label htmlFor="">Image</label><br />
        <input type="text" value={image} onChange={(e)=> setImage(e.target.value)} className='border' placeholder='Enter product image' /> <br />
    
        <button>Save</button>
      </form>


    </>
  )
}

export default Addproduct