"use client"
import { apiUrl } from "@/config";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";

const MiCuenta = () => {
    const [user, setUser] = useState({
        nombreCompleto: "Ilana Natalia Delgado Ozuna",
    });
    const getUser = async () => {
        // try {
            
      };
return(
    <div>
        <div>
            <Link href="/store">Inicio.  
            </Link>
            <Link href= "/store/user/mi-cuenta">Mi cuenta</Link>
        </div>
            <h1>Datos Personales</h1>
        

    </div>
)
}

export default MiCuenta; 