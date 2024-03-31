import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { ChevronRight, MapPin, Plus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import TarjetaModalidad from "./_components/tarjeta-modalidad";

import TituloSeccion from "@/components/ui/titulo-seccion";

import CursosFormacion from "@/models/CursoFormacion";
import EquipoProfesional from "@/components/equipo-profesional";

import CasosExito from "@/components/casos-exito";
import linea from "../../../public/assets/Línea img 4.png";
import CertificacionCursoFormacion from "./_components/certificacionCursoFormacion";
import Link from "next/link";
import Beca from "@/components/beca";
import LineaConectar from "@/components/ui/lineaConectar";
import CursoFormacionHeader from "./_components/cursoFormacionHeader";
import CursoFormacionAcerca from "./_components/cursoFormacionAcerca";
import CursoFormacionObjetivos from "./_components/cursoFormacionObjetivos";
const contenido = [
  {
    titulo: "Habilidades para el éxito profesional",
    unidades: [
      {
        titulo: "Marketing y ventas",
        contenido: [
          "Proceso de comunicación",
          "Comunicación asertiva",
          "Empatía para comunicar",
        ],
      },
      {
        titulo: "Comunicación asertiva",
        contenido: [
          "El mensaje verbal: estructura",
          "Copywriting y Storytelling: diferencias y consejos",
        ],
      },
      {
        titulo: "Liderazgo",
        contenido: [
          "8 pasos para armar tu propia historia",
          "El Viaje del Héroe",
          "Método Self-Us-Now",
        ],
      },
      {
        titulo: "Herramientas digitales",
        contenido: [
          "Ejercicio de FODA para tu marca personal",
          "El autorretrato para una comunicación efectiva",
        ],
      },
    ],
  },
];

const CursoPage = async ({ params }) => {
  const nombreParseado = params.nombre.replace(/%20/g, " ");
  const curso = await CursosFormacion.findOne({
    where: { nombre: nombreParseado },
  });
  if (!curso) {
    return <div>Curso no encontrado</div>;
  }

  const {
    nombre,
    descripcion,
    imagen,
    precio,
    frecuencia,
    videoid,
    acerca,
    modalidades,
    duracion,
    dedicacion,
  } = curso.toJSON();

  return (
    <main className="flex flex-col">
      <CursoFormacionHeader
        nombre={nombre}
        descripcion={descripcion}
        imagen={imagen}
        modalidades={modalidades}
        videoid={videoid}
      />

      <CursoFormacionAcerca
        duracion={duracion}
        dedicacion={dedicacion}
        acerca={acerca}
        frecuencia={frecuencia}
        modalidades={modalidades}
        nombre={nombre}
      />
      <Separator className="my-6" />
      <CursoFormacionObjetivos />
      <Separator className="my-6" />
      <CertificacionCursoFormacion />
      <Separator className="my-6" />
      <section>
        <h2 className="text-2xl lg:text-4xl font-bold my-4 text-center">
          Contenido del curso
        </h2>
        <p className="text-center my-4">Subtitulo</p>

        <div className="container flex flex-col items-center md:items-start md:flex-row gap-4">
          <Accordion type="single" collapsible className="w-full md:w-1/2">
            {JSON.parse(curso.modulos).map((modulo, index) => (
              <AccordionItem value={`item-${index + 1}`} key={index}>
                <AccordionTrigger className="font-bold text-sm md:text-xl  text-left px-4 ">
                  {modulo.titulo}
                </AccordionTrigger>
                <AccordionContent className="font-semibold text-sm p-4  bg-gray-200">
                  {modulo.contenido.map((item, index) => (
                    <p key={index} className="flex items-center mb-4">
                      <ChevronRight className="text-black shrink-0" />
                      {item}
                    </p>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <Plus size={72} className="md:mt-[12%]" />

          <div className="mx-auto w-full md:w-1/3 font-medium flex flex-col justify-between border  rounded-xl p-4">
            <Badge className="text-lg text-center font-semibold m-2 justify-center bg-indigo-900  outline outline-2 outline-offset-4">
              Bono Extra
            </Badge>
            <Image
              src={`/assets/SkillClass.jpg`}
              alt="skillclass"
              className="mx-auto"
              height={400}
              width={400}
            />
            {contenido.map((item, index) => (
              <div key={item + index} className="my-4">
                {/* <h3 className="text-center font-bold">{item.titulo}</h3> */}
                <Accordion type="single" collapsible className="w-full ">
                  {item.unidades.map((unidad, i) => (
                    <AccordionItem
                      value={unidad}
                      key={unidad.titulo + i}
                      className="m-0"
                    >
                      <AccordionTrigger className="font-bold text-sm md:text-xl text-left px-4 py-1 ">
                        {unidad.titulo}
                      </AccordionTrigger>
                      <AccordionContent className="font-semibold text-sm p-4">
                        {unidad.contenido.map((item, j) => (
                          <p key={j} className="flex items-center mb-4">
                            <ChevronRight className="text-black shrink-0" />
                            {item}
                          </p>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Separator className="my-6" />

      <section className="flex flex-col md:flex-row justify-center gap-4 container">
        <article className="w-full rounded-2xl overflow-hidden">
          <TituloSeccion className={`my-1 text-3xl`}>Requisitos</TituloSeccion>
          <ul className="mx-8 list-outside list-disc flex-1 flex flex-col justify-evenly container py-4">
            <li>Mayor de 18 años o 16 con autorizacion de mayor responsable</li>
            <li>Completar formulario de inscripción</li>
            <li>Apto médico (solo modalidad presencial).</li>
            <li>
              Certificado de escolaridad secundaria completa (solamente aquellas
              personas que deseen adquirir la Extensión Universitaria que
              proporciona IUYMCA).
            </li>
          </ul>
        </article>
        <article className="w-full rounded-2xl overflow-hidden">
          <TituloSeccion className={`my-1 text-3xl`}>
            A quien va dirigido
          </TituloSeccion>
          <ul className="mx-8 list-outside list-disc flex-1 flex flex-col justify-evenly container py-4">
            <li>Público en general, sin conocimientos previos.</li>
            <li>Estudiantes de carreras afines.</li>
            <li>
              Deportistas amateurs, profesionales del Deporte, Salud y Fitness.
            </li>
          </ul>
        </article>

        <article className="w-full rounded-2xl overflow-hidden">
          <TituloSeccion className={`my-1 text-3xl`}>
            Potencia tu empleabilidad o emprende
          </TituloSeccion>
          <h3 className="text-center">
            Accede a recursos y herramientas para tu exito
          </h3>
          <ul className="mx-8 list-outside list-disc flex-1 flex flex-col justify-evenly container py-4">
            <li>Bolsa de trabajo</li>
            <li>Pasantias</li>
            <li>Red de Networking</li>
            <li>Eventos con expertos internacionales</li>
          </ul>
          <div className="relative w-full">
            <Image
              src={linea}
              alt="linea"
              className="relative -right-[60%] bottom-0 scale-150"
            />
          </div>
        </article>
      </section>
      {/* modalidades y pago */}
      <Separator className="my-6" />
      <section id="inscripcion" className="pt-6 container">
        <div className="flex max-lg:flex-col gap-4 justify-center items-center lg:items-stretch">
          <div className={"w-full max-w-md lg:w-1/3 lg:text-left"}>
            <TituloSeccion className={"text-left"}>
              Elige la modalidad que mas se adapte a ti
            </TituloSeccion>
            <p>
              Elige a la modalidad que mas se adapte a tus necesidades e
              intereses. <br />
              En el caso de elegir modalidad presencial consultar o ver las
              sedes disponibles.
            </p>
            <Button size={"sm"}>
              <MapPin />
              Ver sedes disponibles{" "}
            </Button>
          </div>
          <TarjetaModalidad modalidad={"ONLINE"} />
          <TarjetaModalidad />
        </div>
      </section>

      <Beca />
      <Separator className="my-6" />
      <EquipoProfesional
        titulo="Conoce al equipo de "
        titulo2="Trainers Educativos "
        titulo2Class="text-idaclass4"
        titulo3="que te guiara al exito"
      />
      <Separator />

      {/* <TituloSeccion className={""}>
          Casos de éxito de nuestros estudiantes
        </TituloSeccion> */}
      <CasosExito titulo={`Casos de éxito de nuestros estudiantes`} />

      <Separator className="my-6" />
      <section className="container my-12 ">
        <TituloSeccion>Otros cursos que pueden interesarte</TituloSeccion>
        <div className="flex justify-center gap-4">
          <article className="w-1/5 border-2 border-black rounded-2xl flex flex-col items-center overflow-hidden">
            <Image
              src={`/cursosFormacion/${imagen}`}
              alt=""
              width={300}
              height={300}
            />
            <p className="font-bold">{nombre}</p>
            <Button className="w-full text-lg">Ver curso</Button>
          </article>
          <article className="w-1/5 border-2 border-black rounded-2xl flex flex-col items-center overflow-hidden">
            <Image
              src={`/cursosFormacion/${imagen}`}
              alt=""
              width={300}
              height={300}
            />
            <p className="font-bold">{nombre}</p>
            <Button className="w-full text-lg">Ver curso</Button>
          </article>
          <article className="w-1/5 border-2 border-black rounded-2xl flex flex-col items-center overflow-hidden">
            <Image
              src={`/cursosFormacion/${imagen}`}
              alt=""
              width={300}
              height={300}
            />
            <p className="font-bold">{nombre}</p>
            <Button className="w-full text-lg">Ver curso</Button>
          </article>
          <article className="w-1/5 border-2 border-black rounded-2xl flex flex-col items-center overflow-hidden">
            <Image
              src={`/cursosFormacion/${imagen}`}
              alt=""
              width={300}
              height={300}
            />
            <p className="font-bold">{nombre}</p>
            <Button className="w-full text-lg">Ver curso</Button>
          </article>
        </div>
      </section>
      <div className="w-full sticky bottom-0 text-center p-4 text-primary bg-black z-20 flex justify-around items-center gap-2">
        <p className="text-white max-sm:text-xs">
          + de 50.0000 certificados otorgados{" "}
        </p>
        <div className="flex gap-12 items-center">
          <Link asChild href="#inscripcion">
            <Button>Inscribirme ahora</Button>
          </Link>
          <Link href="https://wa.me/+5491135872204">
            <div className="max-lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="50"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#fff"
                  d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
                ></path>
                <path
                  fill="#fff"
                  d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
                ></path>
                <path
                  fill="#cfd8dc"
                  d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
                ></path>
                <path
                  fill="#40c351"
                  d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
                ></path>
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default CursoPage;
