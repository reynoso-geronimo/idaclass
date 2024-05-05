import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}


export default async function getCountryCodeFromIP() {
  try {
      const respuesta = await fetch('https://ipapi.co/json/');
      const datos = await respuesta.json();
      const codigoPais = datos.country_code;
      return codigoPais

  } catch (error) {
      console.error('Error al obtener la ubicación:', error);
      return "BR"
  }



}