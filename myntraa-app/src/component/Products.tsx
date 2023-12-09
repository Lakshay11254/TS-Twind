import React, { useEffect, useState } from 'react'


const Products = () => {

    const [product,setProduct] = useState([])

    const getProducts =async () => {
    
   
    try {
        await fetch(" https://api.escuelajs.co/api/v1/products")
        .then((res) => res.json())
        .then((json) => setProduct(json));
        
    } catch (err) {
        console.error(err)
    }
}
useEffect(() => {
  getProducts()
},[])

  return (
    <div>
        
    </div>
  )
}

export default Products