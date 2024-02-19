"use client";
import { useEffect } from "react";
import Link from "next/link";
import { imagesURL } from "@/config";
import { useCart } from "@/contexts/CartContext";

const CheckoutPage = () => {
  const { cart } = useCart();


  useEffect(()=>{
    console.log(cart);
  },[cart])

  return (
    <div className="w-full p-4">
      <h1 className="text-2xl font-bold">Confirmar pedido</h1>
      <div className="flex">
        <div>
          <p>
            Completa tu pedido más rápido.{" "}
            <Link className="font-bold text-red-800" href="/store/user/login">
              Iniciar sesión.
            </Link>
          </p>
          <div className="mt-6">
            <h1 className="font-bold text-xl">Tipo de entrega</h1>
            <div className="ml-2 flex flex-col gap-4">
              <div>
                <input type="radio" name="entrega" id="entrega" />
                <label htmlFor="entrega"> Envío a domicilio</label>
              </div>
              <div>
                <input type="radio" name="entrega" id="retiro" />
                <label htmlFor="retiro"> Retiro en puerta</label>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h1 className="font-bold text-xl">Información de entrega</h1>
            <div className="ml-2 flex flex-col gap-4">
              <div className="flex flex-col">
                <label htmlFor="name"> Nombre completo:</label>
                <input type="text" name="name" id="name" className="bg-gray-300 p-1 border-2 border-gray-400" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="city">Ciudad</label>
                <input type="text" name="city" id="city" className="bg-gray-300 p-1 border-2 border-gray-400" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="adress">Dirección</label>
                <input type="text" name="address" id="adress" className="bg-gray-300 p-1 border-2 border-gray-400" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email">Correo electrónico</label>
                <input type="email" name="email" id="email" className="bg-gray-300 p-1 border-2 border-gray-400" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="cel">Celular</label>
                <input type="cel" name="cel" id="cel" className="bg-gray-300 p-1 border-2 border-gray-400" />
              </div>

            </div>
          </div>
        </div>
        <div>
            <div className="flex flex-col">
                {
                    cart.map((item, index) =>{
                        return (
                            <div className="p-4">
                                <img src={`${imagesURL}/products/${item.id}/principal.jpg`}></img>
                            </div>
                        )  
                    })
                }
            </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
