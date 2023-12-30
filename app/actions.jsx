"use server"

import Curso from "@/models/Curso";

export async function getCursos() {
  try {
    const response = await fetch("http://localhost:1337/api/cursos", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.PUBLIC_KEY}`,
      },
      next: { revalidate: 10*60 },
    });
    const data = await response.json();
    
    return data;
  } catch (error) {
    console.log(error);
  }
}
export async function getCursosFromDB() {
  try {
    const response = await Curso.findAll()
    const data = response.map(curso => curso.toJSON()); 
   
    return data;
  } catch (error) {
    console.log(error);
  }
}