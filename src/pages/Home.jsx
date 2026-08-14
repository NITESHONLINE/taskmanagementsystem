import React, { useState } from 'react'
import Product from '../components/Product'
import Addproduct from '../components/Addproduct'
import { MdDelete } from 'react-icons/md'
import { Link } from 'react-router'
import { useGetProductQuery } from '../services/productApi'

// import component => ctrl + spacebar 

const Home = () => {

    const initialProduct = [
        {
            name: "Banana",
            price: 200,
            description: "Best apple",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXGUJvBVVX6SjlOM7qVU56vxynAuxuUQS_F3yzIl5qKQ&s=10"
        },
        {
            name: "Banana",
            price: 200,
            description: "Best apple",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxuOB_Wzij3-kmoyO4VBubVNPlPDMvS0JM5GsjWO6-ew&s=10"
        },
        {
            name: "Orange",
            price: 200,
            description: "Best orange",
            image: "https://www.quanta.org/thumbs/thumb-orange-640x480-orange.jpg"
        },
        {
            name: "Orange",
            price: 200,
            description: "Best orange",
            image: "https://www.quanta.org/thumbs/thumb-orange-640x480-orange.jpg"
        }
    ]

    const [product, setProduct] = useState(()=>{
        const data = JSON.parse(localStorage.getItem('product'))
        return data ? data : initialProduct
    })

    const {data} = useGetProductQuery();

    console.log("data from api",data)


    const [search, setSearch] = useState("")

//   const dataFromLocastorage = JSON.parse(localStorage.getItem("product"))

 
console.log("search value", search)


const filterData = product.filter((product)=>{
    const searchData = product.name
    .toLowerCase()
    .includes(search.toLowerCase())

    
    return searchData
})



    const handleProductAdd = (singleProduct) => { 
        const updatedData = [singleProduct, ...product] 
        setProduct(updatedData)
console.log(updatedData) 
localStorage.setItem("product", JSON.stringify(updatedData)) 
    }

    const deleteAllProduct = () => {
        localStorage.clear();
        location.reload()
    }

    const handleDeleteProduct = (i) => {
        const allData = JSON.parse(localStorage.getItem('product'));
        allData.splice(i,1)
        console.log("product index",i)
        localStorage.setItem("product", JSON.stringify(allData))
        setProduct(allData)
    }

    return (
        <>

            <Addproduct addproduct={handleProductAdd} />

            <button onClick={deleteAllProduct}>Delete All</button>

        <input 
        type="search"
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
         />

            {/* <Product data={product}/> */}
            <section className='grid grid-cols-4 gap-4 mx-20'>
                {/* {filterData?.map((product, i) => ( */}
                {data?.products?.map((product, i) => (
                    <div key={i} className='border border-gray-400 p-2 rounded'>
                       <Link to={`/${i}`}>
                        <img src={product?.images[0]} alt="" width="150" className='rounded' />
                       </Link>
                        {/* <h1>{product?.name}</h1> */}
                        <h1>{product?.title}</h1>
                        <h3>{product?.price}</h3>
                        <p>{product?.description}</p>
                        <button onClick={()=>handleDeleteProduct(i)}><MdDelete /></button>
                        <Link to={`/edit/${i}`} className='bg-blue-400 text-white'>Edit</Link>
                    </div>
                ))}
            </section>



        </>
    )
}

export default Home