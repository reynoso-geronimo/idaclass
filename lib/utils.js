import { userIP } from "@/middleware";
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}


export default async function getCountryCodeFromIP() {
  try {

    // Utilizar la variable userIP importada

    const respuesta = await fetch(`https://get.geojs.io/v1/ip/country/${userIP}.json`)
    console.log(`https://get.geojs.io/v1/ip/country/{${userIP}}/.json`)
    const codigoPais = respuesta.json()

    return codigoPais;
  } catch (error) {
    console.error('Error al obtener la ubicación:', error);
    return "BR";
  }
}