import React, { useEffect, useState } from "react";

const Home = () => {
  
    

  return (
    // <div>
    //     {product.map((data: any)=>{
    //         return <>
    //         <h1>{data.category.name}</h1>
    //         </>
    //     })}
    // </div>
    <div className="p-10 flex justify-between">
        <div style={{backgroundImage: `url(${"https://www.gyftr.com/blog/wp-content/uploads/2019/12/Bannernew_myntra-3-1.jpg"})`,backgroundRepeat: "no-repeat", backgroundSize: "300px 300px"}}
        className="h-72 w-48 p-2 pt-48">
           <div className="bg-pink-800 text-orange-100 flex flex-col items-center justify-center">
            <h1 className="text-lg">Clothes</h1>
            <h1 className="text-xl font-bold ">45-70</h1>
            <h1 className="text-lg">Shop Now</h1>
           </div>
        </div>
        <div style={{backgroundImage: `url(${"https://www.gyftr.com/blog/wp-content/uploads/2019/12/Bannernew_myntra-3-1.jpg"})`,backgroundRepeat: "no-repeat", backgroundSize: "300px 300px"}}
        className="h-72 w-48 p-2 pt-48">
           <div className="bg-pink-800 text-orange-100 flex flex-col items-center justify-center">
            <h1 className="text-lg">Shoes</h1>
            <h1 className="text-xl font-bold ">40-50</h1>
            <h1 className="text-lg">Shop Now</h1>
           </div>
        </div>
        <div style={{backgroundImage: `url(${"https://www.gyftr.com/blog/wp-content/uploads/2019/12/Bannernew_myntra-3-1.jpg"})`,backgroundRepeat: "no-repeat", backgroundSize: "300px 300px"}}
        className="h-72 w-48 p-2 pt-48">
           <div className="bg-pink-800 text-orange-100 flex flex-col items-center justify-center">
            <h1 className="text-lg">Furniture</h1>
            <h1 className="text-xl font-bold ">25-50</h1>
            <h1 className="text-lg">Shop Now</h1>
           </div>
        </div>
        <div style={{backgroundImage: `url(${"https://www.gyftr.com/blog/wp-content/uploads/2019/12/Bannernew_myntra-3-1.jpg"})`,backgroundRepeat: "no-repeat", backgroundSize: "300px 300px"}}
        className="h-72 w-48 p-2 pt-48">
           <div className="bg-pink-800 text-orange-100 flex flex-col items-center justify-center">
            <h1 className="text-lg">Electronics</h1>
            <h1 className="text-xl font-bold ">35-50</h1>
            <h1 className="text-lg">Shop Now</h1>
           </div>
        </div>
        <div style={{backgroundImage: `url(${"https://www.gyftr.com/blog/wp-content/uploads/2019/12/Bannernew_myntra-3-1.jpg"})`,backgroundRepeat: "no-repeat", backgroundSize: "300px 300px"}}
        className="h-72 w-48 p-2 pt-48">
           <div className="bg-pink-800 text-orange-100 flex flex-col items-center justify-center">
            <h1 className="text-lg">Others</h1>
            <h1 className="text-xl font-bold ">30-50</h1>
            <h1 className="text-lg">Shop Now</h1>
           </div>
        </div>
    </div>
  )
};

export default Home;
