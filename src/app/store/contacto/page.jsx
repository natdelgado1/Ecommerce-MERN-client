import Link from "next/link";


const contacto = () => {
    return(
        <div className="px-28 py-7">

            <p className="p-3 text-4xl py-5 font-bold tracking-wider"> Contacto </p>

            <div className="w-full  justify-start">
            <div className="flex-1  inline-grid  ">
                    <Link href={"#"}>+595 971 331 257</Link>
                    <Link href={"#"}>freshencar@gmail.com</Link>
                    <p>Cambyretá - Barrio San José, calle S/N casi Los Inmigrantes</p>
            </div>
            </div>

        </div>
    )
}

export default contacto;