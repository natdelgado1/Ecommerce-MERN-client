"use client";
import { apiUrl, store } from "@/config";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function FormUser({ onSubmitHandler, isRegister, nombre, email, telefono, password, confirmPassword, loginErrors, passwordConfirmed, inputChange }) {



  return (
    <form onSubmit={(e) => onSubmitHandler(e)}>
      <div className="flex">
        <div className="basis-2/5">
          <div className="py-5">
            <div className="flex flex-col">
              <div className="flex flex-col">
                <label>Nombre Completo</label>
                <input
                  id="nombre"
                  name="nombre"
                  value={nombre}
                  onChange={(e) => inputChange(e)}
                  type="text"
                  required
                  placeholder="Ej. Luz Pérez"
                  className="bg-[#f9f4fa] border border-zinc-900 mb-4 h-8 p-3"
                />
                <label>Correo Electrónico</label>
                <input
                  id="email"
                  required
                  value={email}
                  onChange={(e) => inputChange(e)}
                  type="text"
                  name="email"
                  placeholder="por ejemplo tucorreo@gmail.com"
                  className="bg-[#f9f4fa] border border-zinc-900 mb-4 h-8 p-3"
                />
                {loginErrors.email ? (
                  <h1 className="border-l-2 bg-gray-300 border-l-red-700 px-2 py-1 mb-2">
                    {loginErrors.email.message}
                  </h1>
                ) : null}
                <label>Teléfono(opcional)</label>
                <input
                  type="text"
                  name="telefono"
                  value={telefono}
                  onChange={(e) => inputChange(e)}
                  className="bg-[#f9f4fa] border border-zinc-900 mb-4 h-8 p-3"
                  placeholder="por ejemplo: 0971 331 257"
                />
              </div>

              {isRegister && (
                <div className="flex flex-col">
                  <label>Contraseña</label>
                  <input
                    required
                    value={password}
                    onChange={(e) => inputChange(e)}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="por ejemplo tu contraseña"
                    className="bg-[#f9f4fa]  border border-zinc-900  mb-4 h-8 p-3 "
                  />
                  {loginErrors.password ? (
                    <h1 className="border-l-2 bg-gray-300 border-l-red-700 px-2 py-1 mt-2">
                      {loginErrors.password.message}
                    </h1>
                  ) : null}
                </div>
              )}

                    {isRegister && (
                        <div className="flex flex-col">
                        <label>Confirmar Contraseña</label>
                        <input
                          required
                          value={confirmPassword}
                          onChange={(e) => inputChange(e)}
                          type="password"
                          name="confirmPassword"
                          id="confirmPassword"
                          placeholder="por ejemplo tu contraseña"
                          className="bg-[#f9f4fa]  border border-zinc-900  mb-4 h-8 p-3 "
                        />
                        {!passwordConfirmed && confirmPassword.length > 0 ? (
                          <p className="border-l-2 bg-gray-300 border-l-red-700 px-2 py-1 mt-2">
                            Las contraseñas no coinciden!
                          </p>
                        ) : null}
                      </div>
                    )}
                    
            </div>
          </div>
          <div className="flex flex-col">
            <button
              className="bg-zinc-900 text-white h-10 text-xl"
              type="submit"
            >
              Crear una cuenta
            </button>
            <span className="self-center">
              ¿Ya tienes acceso?.
              <Link href="/store/user/login"> Acceso</Link>
            </span>
          </div>
        </div>
      </div>
    </form>
  );
}
