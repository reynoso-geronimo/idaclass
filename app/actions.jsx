"use server";

import Curso from "@/models/Curso";
import CursosFormacion from "@/models/CursoFormacion";
import Blog from "@/models/Blog";
import { Op } from "sequelize";
import Categoria from "@/models/Categoria";

export async function getCursos() {
  try {
    const response = await fetch("http://localhost:1337/api/cursos", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.PUBLIC_KEY}`,
      },
      next: { revalidate: 10 * 60 },
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}
export async function getCursosFromDB() {
  try {
    const response = await Curso.findAll({ include: Categoria });
    const data = response.map(curso => curso.toJSON());

    return data;
  } catch (error) {
    console.log(error);
  }
}
export async function getCursosPorCategoriaFromDB(categoriaId) {
  try {
    const cursos = await Curso.findAll({
      include: {
        model: Categoria,
        where: {
          id: categoriaId
        }
      }
    });
    
    if(cursos.length < 4) {
      const cursosCategoria1 = await Curso.findAll({
        include: {
          model: Categoria, 
          where: {
            id: 1
          }
        },
        limit: 4 - cursos.length
      });
      
      cursos.push(...cursosCategoria1);
    }
    
    return cursos.map(curso => curso.toJSON());
    
  } catch (error) {
    console.log(error);
  }
}

export async function getCursoFromDB(nombre) {
  try {
    const response = await Curso.findOne({
      where: { nombre: nombre },
      include: Categoria,
    });
    const data = response.toJSON();

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getCursosFormacionFromDB() {
  try {
    const response = await CursosFormacion.findAll();
    const data = response.map(curso => curso.toJSON());

    return data;
  } catch (error) {
    console.log(error);
  }
}
export async function getBlogPostFromDb(limit, not) {
  try {
    const response = not
      ? await Blog.findAll({ limit: limit, where: { id: { [Op.not]: not } } })
      : await Blog.findAll({ limit: limit });
    const data = response.map(blog => blog.toJSON());
    return data;
  } catch (error) {
    console.log(error);
  }
}
