"use client";
import ImageSlider from "@/components/ImageSlider/ImageSlider";
import PanelLanzamientos from "@/components/PanelLanzamientos/PanelLanzamientos";
import { apiUrl, imagesURL, store } from "@/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLock, faRotateRight, faTruck} from "@fortawesome/free-solid-svg-icons"
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import PanelDesplazamiento from "@/components/PanelDesplazamiento/PanelDesplazamiento";
import CardMarcas from "@/components/CardMarcas/CardMarcas";
import { useEffect, useState } from "react";
import axios from "axios";


export default function StorePage() {
  const {marca} = useParams();
  const router = useRouter();
  const [marcas, setMarcas] = useState({});

  

   const getMarcas = async ()=>{
    try {
        const response = await axios.get(`${apiUrl}/products/${marca}`);
        const result = await response.data;
        setMarcas(result);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
   }
   
   useEffect(()=>{
    getMarcas();
   });
  
 

  return (
    <div>
      <div className=" flex justify-center">
        <h1 className="text-xl font-bold">Categorias</h1>
      </div>
      <div className="w-full flex justify-center p-3">
        <ul className="flex gap-10 text-lg">
            <li className="text-center font-bold">
                <Link href="/store/tenis">
                <img className="h-32 "  src="tenis.jpg" alt="tenis" /> 
                Tenis 
                </Link>       
            </li>
            <li className="text-center font-bold">
                <Link href="/store/sandalias">
                <img className="h-32 "  src="/productos/sandalias.jpg" alt="sandalia" /> 
                Sandalias 
                </Link>       
            </li>
            <li className="text-center font-bold">
                <Link href="/store/botas">
                <img className="h-32 w-32"  src="/productos/bota.jpg" alt="bota" /> 
                Botas 
                </Link>       
            </li>
            <li className="text-center font-bold">
                <Link href="/store/infantil">
                <img className="h-32 "  src="/productos/infantil.jpg" alt="infantil" /> 
                Infantil
                </Link>       
            </li>
        </ul>
      </div>
      <PanelLanzamientos/>
      <div className="flex justify-evenly text-lg py-5 ">
        <div className="flex gap-4">
          <div className="items-center flex">
              <FontAwesomeIcon icon={faTruck} style={{color: "#000000",}} />
          </div>
          <div>
              <p className="font-bold">Entrega rápida</p>
              <span>Realizamos envíos a todo el Paraguay</span>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="items-center flex">
              <FontAwesomeIcon icon={faLock} style={{color: "#000000",}} />
          </div>
          <div>
              <p className="font-bold">Compra segura</p>
              <span>Sitio web 100% seguro.</span>
          </div>
        </div>
        <div className="cursor-pointer flex gap-4" onClick={(e) => {router.push(`/store/devoluciones`)} }> 
          <div className="items-center flex">
              <FontAwesomeIcon icon={faRotateRight} style={{color: "#000000",}} />
          </div>
          <div>
              <p className="font-bold">Intercambios de productos</p>
              <span>¡Haga click aquí! para cambiar producto.</span>
          </div>
        </div>
      </div>
        <PanelDesplazamiento/>
        {/* {
                    marcas.map((product, index) => {
                        return (
                            <CardMarcas product={product}/>
                        )
                    })
                } */}

         <div className="flex justify-center py-8">
          <Link href="/store/products">
          <img
          className="h-60 w-80" 
          src= {`${imagesURL}/productostodos.png`} alt="productos" />
          </Link>
          </div>       


    </div>
  );
}
