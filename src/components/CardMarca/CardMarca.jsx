"use client"
import {  imagesURL } from "@/config";
import Link from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


const CardMarca = ({marca}) => {
    

   
    return(
        <div >
            <div>
            <img  className="border-2 border-black rounded-md"
                    src={`${imagesURL}/marcas/${marca}.png`} 
                    alt={`${marca}`} />
                
            </div>
        </div>
    )
}
export default CardMarca;