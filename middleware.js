import { NextResponse } from 'next/server';

export let userIP = "190.183.21.152" // This will not work as middleware() returns a NextResponse object
export function middleware(request) {
   userIP = request?.ip || "";

  // Continuar con el procesamiento de la solicitud
  return NextResponse.next();
}


export const config = {
  matcher: '/:path*',
}