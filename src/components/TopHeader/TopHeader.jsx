"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useEffect } from "react";
import { useCart } from "@/contexts/CartContext";

const TopHeader = () => {
  const { cart, calculateTotalCount } = useCart();

  return (
    <div className=" flex flex-col items-center bg-[#333333]  ">
      <div className="flex items-center p-3 px-[30px] w-full">
        <div className="flex-1"></div>

        <div className="flex-1 ">
          <img width={200} className="mx-auto" src="/logo.png" alt="logo" />
        </div>

        <div className="flex-1 flex gap-4 justify-end">
          <Link href="/store/user/login">
            <FontAwesomeIcon
              className="text-white"
              icon={faUser}
            ></FontAwesomeIcon>
          </Link>
          <button className="relative">
            <span className="absolute top-[-18px] right-[-11px] rounded-full bg-white h-[16px] w-[16px] flex items-center justify-center text-sm font-bold text-[#d7a9a9]">
              {calculateTotalCount()}
            </span>
            <FontAwesomeIcon
              className="text-white"
              icon={faCartShopping}
            ></FontAwesomeIcon>
          </button>
        </div>
      </div>

      <div className=" w-full border-t-2 flex justify-center border-white p-3 ">
        <ul className="flex gap-4 text-white text-xl ">
          <li>
            <Link href={"/store"}>Inicio</Link>
          </li>
          <li>
            <Link href={"/store/categories/65c963770675d5d5ad5f2082"}>
              Tenis
            </Link>
          </li>
          <li>
            <Link href={"/store/categories/65d1cf4a6c6ca2453aa3b56f"}>
              Sandalias
            </Link>
          </li>
          <li>
            <Link href={"/store/categories/65d1cf6e6c6ca2453aa3b571"}>
              Botas
            </Link>
          </li>
          <li>
            <Link href={"/store/categories/65d1cf776c6ca2453aa3b573"}>
              Infantil
            </Link>
          </li>
          <li>
            <Link href={"/store/contacto"}>Contacto</Link>
          </li>
          <li>
            <Link href={"/store/devoluciones"}>Cambios y devoluciones</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopHeader;
