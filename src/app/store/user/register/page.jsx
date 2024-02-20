"use client";
import FormUser from "@/components/FormUser/FormUser";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios  from "axios";
import { apiUrl } from "@/config";


const registerUser = () => {
    const router = useRouter();
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loginErrors, setLoginErrors] = useState({});
    const [passwordConfirmed, setPasswordConfirmed] = useState(false);
    
    const onSubmitHandler = async (event) => {
      event.preventDefault();
      setLoginErrors({});
      if (password === confirmPassword) {
          setPasswordConfirmed(true);
          const user = {
            nombreCompleto: nombre,
            email: email,
            telefono: telefono,
            password: password,
            confirmPassword: confirmPassword,
        };
        try {
            const response = await axios.post(`${apiUrl}/user`, user);
            const result = response.data;
            console.log(result);
            router.push(`/store/user/mi-cuenta`);
        } catch (error) {
          console.log(error);
            // setLoginErrors(error.response.data.errors);
        }
      } else {
          setPasswordConfirmed(false);
        }
    };
    
    const inputChange = (e)=>{
        if(e.target.name === 'nombre'){
           setNombre( e.target.value)
        }
        if(e.target.name === 'email'){
           setEmail( e.target.value)
        }
        if(e.target.name === 'telefono'){
           setTelefono( e.target.value)
        }
        if(e.target.name === 'password'){
           setPassword( e.target.value)
        }
        if(e.target.name === 'confirmPassword'){
           setConfirmPassword( e.target.value)
        }
        // resto de estados 
    }
    
    return (
    <div>
      <div className="py-5 ps-20  bg-[#f9f4fa]">
        <div>
          <div>
            <Link href="/store">Inicio</Link>
            <Link href="/store/user/mi-cuenta">Mi cuenta</Link>
            <Link href="/store/user/register">Registrarse</Link>
          </div>
          <div className="pt-3">
            <h1 className="text-5xl font-bold">Crear mi cuenta</h1>
            <FormUser onSubmitHandler={onSubmitHandler} isRegister={true}  nombre={nombre} email={email} telefono={telefono} password={password} confirmPassword={confirmPassword} passwordConfirmed={passwordConfirmed} loginErrors={loginErrors} inputChange={inputChange} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default registerUser;
