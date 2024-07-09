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
import Evento from "@/models/Evento";
import checkoutNodeJssdk from "@paypal/checkout-server-sdk";
import User from "@/models/User";
import Speaker from "@/models/Speaker";

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
export async function getOtrosCursosFromacionFromDB(nombre) {
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
export const getBlogPostsFromDB = async (limit, not, noDestacada) => {
  const query = {
    limit: limit,
    include: [
      { model: Categoria, as: "categorias" },
      { model: Profesional, as: "profesionals" },
    ],
    where: {},
  };

  if (not) {
    query.where.id = { [Op.not]: not };
  }

  if (noDestacada) {
    query.where.destacada = false;
  }

  try {
    const response = await Blog.findAll(query);

    return response.map(blog => blog.toJSON());
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export async function getBlogPostsDestacadosFromDB(limit = 3) {
  try {
    const response = await Blog.findAll({
      where: { destacada: true },
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
export async function getBlogPostFromDB(id) {
  try {
    const response = await Blog.findOne({
      where: { id: id },
      include: [
        {
          model: CursosFormacion,
          as: "cursos_formacions",
        },
        {
          model: Categoria,
          as: "categorias",
        },
        {
          model: Profesional,
          as: "profesionals",
        },
        {
          model: CursosFormacion,
          as: "cursosEmbudo",
        },
      ],
    });
    const data = response.toJSON();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const getEventosFromDB = async (limit, not) => {
  const query = {
    limit: limit,
    include: [{ model: Profesional, as: "profesionals" }],
    order: [["fecha", "ASC"]], // Ordenar por fecha ascendente
  };

  if (not) {
    query.where.id = { [Op.not]: not };
  }

  try {
    const today = new Date(); // Obtener la fecha actual
    const response = await Evento.findAll({
      ...query,
      where: {
        ...query.where,
        fecha: {
          [Op.gte]: today, // Filtrar eventos con fecha mayor o igual a hoy
        },
      },
    });

    const futureEvents = response.map(evento => evento.toJSON());

    const pastEvents = await Evento.findAll({
      ...query,
      where: {
        ...query.where,
        fecha: {
          [Op.lt]: today, // Filtrar eventos con fecha menor a hoy
        },
      },
    });

    return [...futureEvents, ...pastEvents.map(evento => evento.toJSON())];
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export async function getEventoFromDB(id) {
  try {
    const response = await Evento.findOne({
      where: { id: id },
      include: [
        {
          model: Profesional,
          as: "profesionals",
        },
        {
          model: Speaker,
          as: "speakers",
        }
      ],
    });
    const data = response.toJSON();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function inscripcion(
  formData,
  user,
  tipo,
  nombre,
  modalidad,
  monto
) {
  await User.update(
    {
      pais: formData.pais,
      estado_provincia: formData.estadoprovincia,
      localidad: formData.localidad,
      direccion: formData.direccion,
      telefono: formData.telefono,
      dni: formData.dni,
      dob: new Date(formData.dob),
    },
    {
      where: {
        id: user.userId,
      },
    }
  );

  const client = new MercadoPagoConfig({
    accessToken: process.env.MP_ACCESS_TOKEN,
  });

  const preference = await new Preference(client).create({
    body: {
      metadata: {
        userName: user.userName,
        userId: user.userId,
        email: user.email,
        pagoModalidad: formData.pagoModalidad,
      },

      payment_methods: {
        excluded_payment_methods: [],
        excluded_payment_types: [],
        installments: 1,
      },
      items: [
        {
          title: nombre + " - " + modalidad + " - " + tipo,
          quantity: 1,
          unit_price: parseFloat(monto),
        },
      ],

      back_urls: {
        success: `${process.env.MP_BACK_URL}/mi-perfil`,
        //failure: `${process.env.DOMAIN}/`,
        //pending: `${process.env.DOMAIN}/`,
      },
      auto_return: "approved",
    },
  });
  //console.log(preference);
  //console.log(preference.sandbox_init_point);
  redirect(preference.init_point);
  //redirect(preference.sandbox_init_point);
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
export async function getAllVentasFromDB() {
  try {
    const response = await Venta.findAll();
    const data = response.map(venta => venta.toJSON());

    return data;
  } catch (error) {
    console.log(error);
  }
}


export async function getAllUsers(){
  try {
    const response = await User.findAll();
    const data = response.map(user => user.toJSON());
    return data
  } catch (error) {
    console.log(error);    
  }
}
