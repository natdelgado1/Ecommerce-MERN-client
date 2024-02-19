import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import axios from "axios";
import { apiUrl } from "@/config";

export default function PanelLanzamientos(){

   const [products, setProducts] = useState([]);

   const getLanzamientos = async ()=>{
    try {
        const response = await axios.get(`${apiUrl}/products/lanzamientos`);
        const result = await response.data;
        setProducts(result);

      } catch (error) {
        console.log(error);
      }
   }
   
   useEffect(()=>{
    getLanzamientos();
   });

    return(
        <div className="w-screen ">
            <h1 className="text-center text-xl font-bold">Lanzamientos</h1>
            <div className="w-full w-max-screen whitespace-nowrap overflow-hidden overflow-x-scroll scroll-smooth focus:scroll-auto">
                {
                    products.map((product, index) => {
                        return (
                            <ProductCard product={product}/>
                        )
                    })
                }
            </div>
        </div>
    );
};