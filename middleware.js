import { NextResponse } from 'next/server';

export function middleware(request) {
  const userIP = request.ip; // Obtener la IP del usuario

  // Puedes realizar cualquier lógica adicional con la IP del usuario
  console.log('IP del usuario:', userIP);

  // Continuar con el procesamiento de la solicitud
  return NextResponse.next();
}

// Configurar el middleware para que se ejecute en todas las rutas
export const config = {
  matcher: '/:path*',
}