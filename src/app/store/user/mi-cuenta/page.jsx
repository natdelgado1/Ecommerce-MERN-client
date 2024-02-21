"use client";
import { apiUrl } from "@/config";
import { useUser } from "@/contexts/UserContext";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const MiCuenta = () => {
  const { user, logout } = useUser();
  const router = useRouter();

  const deleteUser = async () => {
    try {
      const response = await axios.delete(
        `${apiUrl}/user/65cda8ba80893be73f85499b`
      );
      const result = response.data;
      console.log(result);
      alert("Tu usuario se elimino");
      logout();
      router.push("/store/user/login");
    } catch (error) {
      console.log(error);
    }
  };


  return user?  (
    <div className="px-28 py-7 h-full w-[70%]">
      <div>
        <Link href="/store">Inicio-</Link>
        <Link href="/store/user/mi-cuenta">Mi cuenta</Link>
      </div>
      <p className=" text-5xl py-5 font-bold tracking-wider"> Mi cuenta </p>

      <div className="flex justify-between">
        <div className="flex flex-col">
          <h1 className="text-xl font-bold pb-2">Datos Personales</h1>
          <span className="font-bold">{user.nombreCompleto}</span>
          <span>{user.email}</span>
          <span>Télefono: {user.telefono}</span>
          <Link
            className="mt-2 bg-[#990000] h-8 w-16 text-[#F5F5F5] text-center text-lg justify-center ml-2"
            href="/store"
          >
            Salir
          </Link>
        </div>
        <div className="flex flex-col">
          <Link className="underline" href="/store/user/editUser">
            Editar
          </Link>
          <button className="underline" onClick={() => deleteUser()}>
            Eliminar
          </button>
        </div>
        <div className="flex flex-col">
          <FontAwesomeIcon className="h-8" icon={faShoppingCart} />
          <span>Realize una compra</span>
          <Link
            href="/store/products"
            className="mt-2 bg-[#000000] h-8 w-34 text-[#F5F5F5] text-center text-lg justify-center"
          >
            Ir a la tienda
          </Link>
        </div>
      </div>
    </div>
  ) : null
};

export default MiCuenta;
