"use client"
import ProductCard from "@/components/ProductCard/ProductCard";
import { apiUrl } from "@/config";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function categoriesPage(){

   const {id} = useParams();

   const [products, setProducts] = useState([]);
   const [category, setCategory] = useState({});


    const handleGetProducts = async () => {
        try {
            const response = await axios.get(`${apiUrl}/products/category/${id}`);
            const result = await response.data
            setProducts(result);
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }
    const handleGetCategory = async () => {
        try {
            const response = await axios.get(`${apiUrl}/categories/${id}`);
            const result = await response.data
            setCategory(result);
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleGetCategory();
        handleGetProducts();
      },[])



    return category?._id? (

        
        <div className="px-28 py-7">
            <p className="p-3 text-4xl py-5 font-bold tracking-wider">{category.name} </p>
                <div className="w-full  justify-start">
                {
                    products.map((product, index) => {
                        return(
                            <ProductCard key={index} product={product}/>
                            )
                        } )
                    }
                </div>
            </div>
           )
           : (
            <div>
              <FontAwesomeIcon className="animate-spin" width={32} icon={faRefresh} />
            </div>
          );
           
           
        }
        