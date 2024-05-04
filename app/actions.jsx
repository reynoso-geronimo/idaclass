"use server";

import Curso from "@/models/Curso";
import CursosFormacion from "@/models/CursoFormacion";
import Blog from "@/models/Blog";
import { Op } from "sequelize";
import Categoria from "@/models/Categoria";
import Profesional from "@/models/Profesional";

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
    const response = await Curso.findAll({include: [
      {
        model: Profesional,
        as: "profesionals",
      },
      {
        model: Categoria,
        as: "categorias",
      },
    ], });
    const data = response.map(curso => curso.toJSON());

    return data;
  } catch (error) {
    console.log(error);
  }
}
export async function getCursosPorCategoriaFromDB(categoriaId, cursoActual) {
  try {
    const cursos = await Curso.findAll({
      where: { nombre: { [Op.not]: cursoActual } },
      include: {
        model: Categoria,
        where: {
          id: categoriaId,
        },
      },
    });

    if (cursos.length < 4) {
      const cursosCategoria1 = await Curso.findAll({
        include: [
          {
            model: Profesional,
            as: "profesionals",
          },
          {
            model: Categoria,
            as: "categorias",
          },
        ],
        limit: 4 - cursos.length,
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
      include: [
        {
          model: Profesional,
          as: "profesionals",
        },
        {
          model: Categoria,
          as: "categorias",
        },
      ],
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

export async function getCursoFormacionFromDB(nombre) {
  try {
    const response = await CursosFormacion.findOne({
      where: { nombre: nombre },
    });
    const data = response.toJSON();

    return data;
  } catch (error) {
    console.log(error);
  }
}
export async function getOtrosCursosFromacionFromDb(nombre) {
  try {
    const response = await CursosFormacion.findAll({
      where: { nombre: { [Op.not]: nombre } },
    });
    const data = response.map(curso => curso.toJSON());

    return data;
  } catch (error) {
    console.log(error);
  }
}
export async function getBlogPostsFromDb(limit, not) {
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
export async function getBlogPostFromDb(id) {
  try {
    const response = await Blog.findOne({
      where: { id: id },
      include: [
        {
          model: Curso,
          as: "cursos",
        },
        {
          model: Categoria,
          as: "categorias",
        },
      ],
    });
    const data = response.toJSON();
    return data;
  } catch (error) {
    console.log(error);
  }
}
