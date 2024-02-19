"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser, faCartShopping} from "@fortawesome/free-solid-svg-icons"
import Link from "next/link";

const TopHeader = () => {
 
  
  return (
    <div className=" flex flex-col items-center bg-[#333333]  ">
      <div className="flex items-center p-3 px-[30px] w-full">


        <div className="flex-1"></div>

        <div className="flex-1 ">
          <img width={200} className="mx-auto" src="/logo.png" alt="logo" />
        </div>

        <div className="flex-1 flex gap-4 justify-end">
          <Link href="/store/user/login">
            <FontAwesomeIcon className="text-white" icon={faUser}></FontAwesomeIcon>
          </Link>
          <button className="relative">
                <span className="absolute top-[-18px] right-[-11px] rounded-full bg-white h-[16px] w-[16px] flex items-center justify-center text-sm font-bold text-[#d7a9a9]" >2</span>
            <FontAwesomeIcon className="text-white" icon={faCartShopping}></FontAwesomeIcon>   
          </button>
        </div>


      </div>

      <div className=" w-full border-t-2 flex justify-center border-white p-3 ">
        <ul className="flex gap-4 text-white text-xl ">
           <li><Link href={"#"}>Inicio</Link></li> 
           <li><Link href={"#"}>Tenis</Link></li>
           <li><Link href={"#"}>Sandalias</Link></li>
           <li><Link href={"#"}>Botas</Link></li>
           <li><Link href={"#"}>Infantil</Link></li>
           <li><Link href={"#"}>Contacto</Link></li>
           <li><Link href={"#"}>Cambios y devoluciones</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default TopHeader;
