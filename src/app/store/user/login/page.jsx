"use client";
import { login } from "@/services/auth.service";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginErrors, setLoginErrors] = useState({});

  const onSubmit = async (event) => {
    event.preventDefault();
   
    const response= await login(email,password);    
    console.log(response);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="py-5 ps-20  bg-[#f9f4fa]">
      <div>
        <div>
          <Link href="/store">Inicio</Link>
          <Link href="/store/user/mi-cuenta">Mi cuenta</Link>
          <Link href="/store/user/register">Registrarse</Link>
        </div>
        <div className="pt-3">
          <form onSubmit={(event) => onSubmit(event)}>
            <h1 className="text-5xl font-bold">Iniciar Sesión</h1>
            <div className="flex">
              <div className="basis-2/5">
                <div className="py-5">
                  <div className="flex flex-col">
                    <div className="flex flex-col">
                      <label>Correo Electrónico</label>
                      <input
                        id="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        name="email"
                        placeholder="por ejemplo tucorreo@gmail.com"
                        className="bg-[#f9f4fa] border border-zinc-900 mb-4 h-8 p-3"
                      />
                      {loginErrors.emailError ? (
                        <h1 className="border-l-2 bg-gray-300 border-l-red-700 px-2 py-1 mt-2">
                          {loginErrors.emailError}
                        </h1>
                      ) : null}
                    </div>
                    <div className="flex flex-col">
                      <label>Contraseña</label>
                      <input
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        name="password"
                        id="password"
                        placeholder="por ejemplo tu contraseña"
                        className="bg-[#f9f4fa]  border border-zinc-900  mb-4 h-8 p-3 "
                      />
                      {loginErrors.pwdError ? (
                        <h1 className="border-l-2 bg-gray-300 border-l-red-700 px-2 py-1 mt-2">
                          {loginErrors.pwdError}
                        </h1>
                      ) : null}
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Link href="#">Olvidó su contraseña?</Link>
                  </div>
                </div>
                <div className="flex flex-col">
                  <button
                    className="bg-zinc-900 text-white h-10 text-xl"
                    type="submit"

                  >
                    Iniciar Sesión
                  </button>
                  <span className="self-center">
                    ¿Aún no tienes cuenta?.
                    <Link href="/store/user/register"> Crea una cuenta</Link>
                  </span>
                </div>
              </div>
              {/* <div></div> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
