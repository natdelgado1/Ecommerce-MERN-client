"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { apiUrl } from "@/config";

const AllProducts = ( {title}) => {
    const [products, setProducts] = useState([]);

    const getAllProducts = async ()=>{
        try {
            const response = await axios.get(`${apiUrl}/products`);
            const result = await response.data;
            setProducts(result);
    
          } catch (error) {
            console.log(error);
          }
       }

       useEffect(()=>{
        getAllProducts();
       });
    

    return(
            <div>
                <p className="p-3 text-4xl py-5 font-bold tracking-wider">{title}</p>
                <div className="w-full w-[100%]  justify-start">
                {
                    products.map((product, index) => {
                        return (
                            <ProductCard product={product}/>
                        )
                    })
                }
            </div>
            </div>
    )
}

export default AllProducts;