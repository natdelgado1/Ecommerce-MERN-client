"use client"
import {  imagesURL } from "@/config";
import Link from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


const CardMarcas = ({ product }) => {
    const router = useRouter();
    const loadMarca = (marca)=>{
        router.push(`/store/products/${marca}`)
    }

   
    return(
        <div>
            <div>
                hola soy una tarjeta de marca
                <img 
                    src={`${imagesURL}/marcas/${product.marca}.png`} 
                    alt={`${product.marca}`} />
            </div>
        </div>
    )
}
export default CardMarcas;