"use server";
import Curso from "@/models/Curso";
import Venta from "@/models/Venta";
import CursosFormacion from "@/models/CursoFormacion";
import Blog from "@/models/Blog";
import { Op } from "sequelize";
import Categoria from "@/models/Categoria";
import Profesional from "@/models/Profesional";
import { MercadoPagoConfig, Preference } from "mercadopago";
import { redirect } from "next/navigation";

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
    const response = await Curso.findAll({
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
    const data = response.map(curso => curso.toJSON());

    return data;
  } catch (error) {
    console.log(error);
  }
}
export async function getCursosPorCategoriaFromDB(
  categoriaId,
  cursoActual,
  limit = 4
) {
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

    if (cursos.length < limit) {
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
        limit: limit - cursos.length,
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
      ? await Blog.findAll({
          limit: limit,
          where: { id: { [Op.not]: not } },
          include: [
            {
              model: Categoria,
              as: "categorias",
            },
            {
              model: Profesional,
              as: "profesionals",
            },
          ],
        })
      : await Blog.findAll({
          limit: limit,
          include: [
            {
              model: Categoria,
              as: "categorias",
            },
            {
              model: Profesional,
              as: "profesionals",
            },
          ],
        });
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
          include: [
            {
              model: Profesional,
              as: "profesionals",
            },
          ],
        },
        {
          model: Categoria,
          as: "categorias",
        },
        {
          model: Profesional,
          as: "profesionals",
        },
      ],
    });
    const data = response.toJSON();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function inscripcion(formData) {
  "use server";
  //console.log(formData);

  const client = new MercadoPagoConfig({
    accessToken: process.env.MP_ACCESS_TOKEN,
  });

  const preference = await new Preference(client).create({
    body: {
      metadata: {
        userName: formData.get("userName"),
        userId: formData.get("userId"),
        email: formData.get("userEmail"),
      },

      payment_methods: {
        excluded_payment_methods: [],
        excluded_payment_types: [],
        installments: 3,
      },
      items: [
        {
          title:
            formData.get("nombre") +
            " - " +
            formData.get("modalidad") +
            " - " +
            formData.get("tipo"),
          quantity: 1,
          unit_price: parseFloat(formData.get("precio")),
        },
      ],

      back_urls: {
        success: `${process.env.NEXTAUTH_URL}/mi-perfil`,
        //failure: `${process.env.DOMAIN}/`,
        //pending: `${process.env.DOMAIN}/`,
      },
      auto_return: "approved",
    },
  });
  //console.log(preference);
  //console.log(preference.sandbox_init_point);
  redirect(preference.sandbox_init_point);
}

export async function getVentasFromDB(id) {
  try {
    const response = await Venta.findAll({
      where: {
        user_id: id,
      },
    });
    const data = response.map(venta => venta.toJSON());

    return data;
  } catch (error) {
    console.log(error);
  }
}
