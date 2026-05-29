import { NextResponse } from 'next/server';
import RegistroEvento from '@/models/RegistroEvento';
import { z } from 'zod';

const registroSchema = z.object({
  nombre: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  apellido: z.string().min(2, 'El apellido debe tener al menos 2 caracteres'),
  email: z.string().email('Debe ser un email válido'),
  telefono: z.string().min(8, 'El teléfono debe tener al menos 8 caracteres'),
});

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Validar con Zod
    const validation = registroSchema.safeParse(body);
    
    if (!validation.success) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Datos inválidos',
          details: validation.error.errors 
        },
        { status: 400 }
      );
    }

    const { nombre, apellido, email, telefono } = validation.data;

    // Nota: permitimos múltiples registros con el mismo email
    // (un mismo asistente puede anotarse a distintos eventos).
    const nuevoRegistro = await RegistroEvento.create({
      nombre: nombre.trim(),
      apellido: apellido.trim(),
      email: email.toLowerCase().trim(),
      telefono: telefono.trim(),
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Registro exitoso',
        data: {
          id: nuevoRegistro.id,
          nombre: nuevoRegistro.nombre,
          apellido: nuevoRegistro.apellido,
          email: nuevoRegistro.email,
          telefono: nuevoRegistro.telefono
        }
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Error al guardar registro del evento:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Error al procesar el registro. Por favor intenta nuevamente.' 
      },
      { status: 500 }
    );
  }
}

