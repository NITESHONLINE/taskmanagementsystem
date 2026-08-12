import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

const Addproduct = ({
  addproduct,
  editData,
  editIndex,
  isEdit = false
}) => {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const nav = useNavigate()
  
  useEffect(()=>{
    if(isEdit && editData){
      setName(editData?.name)
      setPrice(editData?.price)
      setDescription(editData?.description)
      setImage(editData?.image)
    }
  }, [editData, isEdit])


  const handleSubmitProduct = (e) => {
    e.preventDefault()
    const singleProduct = { name, price, description, image }
   
    if(isEdit){
      const products = JSON.parse(localStorage.getItem('product'));
      products[editIndex] = singleProduct;
      localStorage.setItem('product', JSON.stringify(products));
      alert("Product updated successfully.")
      nav("/")
    } else{
      addproduct(singleProduct)
      setName("")
      setDescription("")
      setPrice("")
      setImage("")
      alert("Product added successfully.")
    }

  }


  return (
    <>

      <form onSubmit={handleSubmitProduct} className='shadow-md p-2 rounded-md w-[220px]'>
        <label htmlFor="">Name</label><br />
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='border' placeholder='Enter product name' /> <br />

        <label htmlFor="">Price</label><br />
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} className='border' placeholder='Enter product price' /> <br />

        <label htmlFor="">Description</label><br />
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className='border' placeholder='Enter product description' /> <br />

        <label htmlFor="">Image</label><br />
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} className='border' placeholder='Enter product image' /> <br />

        <button>Save</button>
      </form>


    </>
  )
}

export default Addproduct