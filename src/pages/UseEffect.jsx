import React, { use, useEffect, useState } from 'react'

const UseEffect = () => {

    const [count, setCount] = useState(0)

    const incrementCount = () => {
        setCount(count + 1)
    }

    // useEffect(function, [])

    // 3 types 
    useEffect( ()=>{
        console.log("it is running.")
    },[])

    // second type 
    useEffect( ()=>{
        console.log("it is running second.")
    },[count])

    // third type 
    useEffect(()=> {
        console.log("asdfsdf")
    })


    return (
        <> 
        <h2>count is {count}</h2>
            <button onClick={incrementCount} className='bg-green-400 py-2 px-4 text-white rounded'>increment +</button> 
        </>
    )
}

export default UseEffect