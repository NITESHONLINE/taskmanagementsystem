import React from 'react'
import Addproduct from '../components/Addproduct'
import { useParams } from 'react-router';

const EditProduct = () => {
    const {id} = useParams()
    const products = JSON.parse(localStorage.getItem('product'));

    const product = products[id];
    
  return (
    <>

    <Addproduct
        editData={product}
        editIndex={id}
        isEdit={true}
    />

    </>
  )
}

export default EditProduct