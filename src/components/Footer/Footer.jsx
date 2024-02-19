"use client"
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram} from "@fortawesome/free-brands-svg-icons"

const  Footer = () => {
    return(
        <footer className="bg-[#333333]  flex text-white">
            <div className="flex gap-4 items-center  p-3 px-[30px] w-full">
                <div className="flex-1 inline-grid self-start">
                <h1 className="text-xl">Información</h1>
                <Link href={"#"}>Cambios y devoluciones</Link>
                <Link  href={"#"}>Entrar en contacto</Link>
                </div>
                <div className="flex-1  inline-grid self-start ">
                    <h1 className="text-xl">Entrar en contacto</h1>
                    <Link href={"#"}>+595 971 331 257</Link>
                    <Link href={"#"}>freshencar@gmail.com</Link>
                    <p>Cambyretá - Barrio San José, calle S/N casi Los Inmigrantes</p>
                </div>
                <div className="flex-1 flex  gap-4 content-start self-start ">
                    <button>
                    <FontAwesomeIcon className="h-[16px] w-[16px]" icon={faInstagram}/>
                    </button>
                    <button>
                    <FontAwesomeIcon className="h-[16px] w-[16px]" icon={faFacebookF}/>
                    </button>
                </div>
            </div>


            <div></div>
            <div></div>
        </footer>
    )
}

export default Footer;