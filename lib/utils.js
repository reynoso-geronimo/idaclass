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
    //console.log(`https://get.geojs.io/v1/ip/country/{${userIP}}/.json`)
    const codigoPais = respuesta.json()

    return codigoPais;
  } catch (error) {
    console.error('Error al obtener la ubicación:', error);
    return "BR";
  }
}


export function calcularPreciosCurso(precio, descuento = 0, cuotas = 1, usd = false) {
  const precioBeca = Math.round(precio - precio * descuento / 100);
  const cuotaPrecio = usd
    ?
    Math.floor(((precio / cuotas) - ((precio / cuotas) * 25 / 100)))
    :
    Math.floor(((precio / cuotas) - ((precio / cuotas) * 25 / 100)) / 100) * 100

  return {
    precioBeca,
    cuotaPrecio,
  };
}