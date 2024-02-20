"use client";
import { useEffect } from "react";
import Link from "next/link";
import { imagesURL } from "@/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faClock, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "@/contexts/CartContext";

const CheckoutPage = () => {
  const { addToCart } = useCart();

  function format(num) {
    return (
      "Gs. " +
      Number.parseInt(num)
        .toFixed(0)
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    );
  }

  const cart = [
    {
      _id: "65d1dc0e6c6ca2453aa3b5a6",
      price: 110000,
      title: "Nike Dunk Pro Infantil",
      talla: 31,
      quantity: 3,
    },
    {
      _id: "65d1dc0e6c6ca2453aa3b5a6",
      price: 110000,
      title: "Nike Dunk Pro Infantil",
      talla: 27,
      quantity: 3,
    },
    {
      _id: "65d1d5ca6c6ca2453aa3b57e",
      price: 145000,
      title: "Converse Plataforma",
      talla: 37,
      quantity: 2,
    },
    {
      _id: "65d1d5ca6c6ca2453aa3b57e",
      price: 145000,
      title: "Converse Plataforma",
      talla: 38,
      quantity: 3,
    },
    {
      _id: "65d1d3c46c6ca2453aa3b576",
      price: 155000,
      title: "Nike Dunk Low Pro",
      talla: 38,
      quantity: 1,
    },
    {
      _id: "65d1d3c46c6ca2453aa3b576",
      price: 155000,
      title: "Nike Dunk Low Pro",
      talla: 34,
      quantity: 2,
    },
  ];

  const addItem = (item) => {
    addToCart(item, item.talla, 1);
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <div className="w-full p-4">
      <h1 className="text-2xl font-bold text-center py-8">Confirmar pedido</h1>

      <div className="flex justify-evenly">
        <div className="">
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
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <label htmlFor="name"> Nombre completo:</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-300 p-1 border-2 border-gray-400"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="city">Ciudad</label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  className="bg-gray-300 p-1 border-2 border-gray-400"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="adress">Dirección</label>
                <input
                  type="text"
                  name="address"
                  id="adress"
                  className="bg-gray-300 p-1 border-2 border-gray-400"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email">Correo electrónico</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-300 p-1 border-2 border-gray-400"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="cel">Celular</label>
                <input
                  type="cel"
                  name="cel"
                  id="cel"
                  className="bg-gray-300 p-1 border-2 border-gray-400"
                />
              </div>
              <div className="flex flex-col">
                <button className="p-2 w-full bg-[#666666] font-bold text-white flex items-center justify-between px-8">
                    Confirmar pedido
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" pt-12">
          <div className="grid grid-cols-2 gap-2">
            {cart.map((item, index) => {
              return (
                <div className=" flex gap-2 items-center" key={index}>
                  <img
                    src={`${imagesURL}/products/${item._id}/principal.jpg`}
                    width={80}
                  ></img>
                  <div>
                    <p className="font-bold">{item.title}</p>
                    <p>
                      <span className="font-bold">{item.quantity}</span> x{" "}
                      {format(item.price)}
                    </p>
                    <div className="flex gap-2">
                      <button className=" border-2 border-gray-400 w-6 h-6 rounded-md">
                        <FontAwesomeIcon color="red" icon={faTrash} />
                      </button>
                      <button className="bg-[#333333] w-6 h-6 rounded-md">
                        <FontAwesomeIcon
                          color="white"
                          onClick={(e) => {
                            addItem(item);
                          }}
                          icon={faPlus}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-8 flex flex-col gap-2 w-[50%]">
            <p className="font-bold text-xl">Resumen</p>
            <div className="flex justify-between font-bold ">
                <span>Productos ({cart.length})</span>
                <span>{format(cart[0].price)}</span>
            </div>
            <div className="flex justify-between">
                <span>Envío</span>
                <span>{format((cart[0].price*0.1958)+cart[0].price)}</span>
            </div>
            <div className="flex justify-between font-bold ">
                <span className="text-lg">Total sin envío</span>
                <span className="text-lg">{format(cart[0].price)}</span>
            </div>
          </div>
          <div className="mt-4 w-[80%]">
            <p className="text-sm font-bold text-red-400">¡Bien! Haz tu pedido y lo gestionaremos dentro de nuestro horario de apertura.</p>
          </div>
          <div className="mt-4 w-[80%]">
            <p className="text-sm"><FontAwesomeIcon color="grey" icon={faClock}/>¡Cerrado ahora!</p>
          </div>
          <div className="mt-4 w-[80%]">
            <p className="text-sm">Lunes a Sábado: 09:00 a. m. - 06:00 p. m.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
