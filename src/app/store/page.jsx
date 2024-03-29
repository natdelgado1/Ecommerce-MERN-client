"use client";
import ImageSlider from "@/components/ImageSlider/ImageSlider";
import PanelLanzamientos from "@/components/PanelLanzamientos/PanelLanzamientos";
import { apiUrl, imagesURL, store } from "@/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLock, faRotateRight, faTruck} from "@fortawesome/free-solid-svg-icons"
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import PanelDesplazamiento from "@/components/PanelDesplazamiento/PanelDesplazamiento";
import CardMarca from "@/components/CardMarca/CardMarca";
import { useEffect, useState } from "react";
import axios from "axios";


export default function StorePage() {
  const {marca} = useParams();
  const router = useRouter();
  const [marcas, setMarcas] = useState({});

  
 
 

  return (
    <div>
      <div className=" flex justify-center">
        <h1 className="text-xl font-bold">Categorias</h1>
      </div>
      <div className="w-full flex justify-center p-3">
        <ul className="flex gap-10 text-lg">
            <li className="text-center font-bold">
                <Link href="/store/categories/65c963770675d5d5ad5f2082">
                <img className="h-32 "  src="tenis.jpg" alt="tenis" /> 
                Tenis 
                </Link>       
            </li>
            <li className="text-center font-bold">
                <Link href="/store/categories/65d1cf4a6c6ca2453aa3b56">
                <img className="h-32 "  src="/productos/sandalias.jpg" alt="sandalia" /> 
                Sandalias 
                </Link>       
            </li>
            <li className="text-center font-bold">
                <Link href="/store/categories/65d1cf6e6c6ca2453aa3b571">
                <img className="h-32 w-32"  src="/productos/bota.jpg" alt="bota" /> 
                Botas 
                </Link>       
            </li>
            <li className="text-center font-bold">
                <Link href="/store/categories/65d1cf776c6ca2453aa3b573">
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
        <div className="mt-4">

        <div className=" flex justify-center">
        <h1 className="text-2xl font-bold">Escoja su marca</h1>
      </div>
        <div className="grid grid-cols-3 gap-4 p-4">
        <CardMarca marca={"Converse"}/>
        <CardMarca marca={"Adidas"}/>
        <CardMarca marca={"Nike"}/>
        <CardMarca marca={"Puma"}/>
        <CardMarca marca={"Moleca"}/>
        <CardMarca marca={"Beira rio"}/>
        </div>
        </div>

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
