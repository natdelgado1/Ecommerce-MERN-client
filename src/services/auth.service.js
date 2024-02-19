"use server"
import axios from "axios";
import { cookies } from "next/headers";

export async function login(email, password){
    try {
        const data = {
            email,
            password,
          };
        const response = await axios.post(
          `http://localhost:8000/api/session/`,
          data
        );
        const result = await response.data;
      } catch (error) {
        return {error}
      }
}