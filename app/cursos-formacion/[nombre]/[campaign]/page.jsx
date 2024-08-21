import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import EquipoProfesional from "@/components/equipo-profesional";
import CasosExito from "@/components/casos-exito";
import CertificacionCursoFormacion from "../_components/certificacionCursoFormacion";
import Link from "next/link";
import BecaAsesorate from "@/components/becaAsesorate";
import CursoFormacionAcerca from "../_components/cursoFormacionAcerca";
import CursoFormacionObjetivos from "../_components/cursoFormacionObjetivos";
import CursosContenido from "@/components/cursos/CursoContenido";
import CursoFormacionRequisitos from "../_components/cursoFormacionRequisitos";
import CursoFormacionModalidades from "../_components/cursoFormacionModalidades";
import CursoFormacionOtrosCursos from "../_components/cursoFormacionOtrosCursos";
import { getCursoFormacionFromDB, getOtrosCursosFromacionFromDB } from "@/app/actions";
import getCountryCodeFromIP from "@/lib/utils";
import CursoHeader from "@/components/cursos/CursosHeader";

const CursoPage = async ({ params }) => {
  const pais = await getCountryCodeFromIP();
  console.log(pais.country);
  const nombreParseado = decodeURI(params.nombre);
  const curso = await getCursoFormacionFromDB(nombreParseado);
  if (!curso) {
    return <div>Curso no encontrado</div>;
  }
  const cursos = await getOtrosCursosFromacionFromDB(nombreParseado);

  const {
    id,
    nombre,
    descripcion,
    frecuencia,
    videoid,
    acerca_curso,
    modalidades,
    duracion,
    dedicacion,
    modulos,
    ojetivo_titulo_uno,
    ojetivo_texto_uno,
    ojetivo_titulo_dos,
    ojetivo_texto_dos,
    ojetivo_titulo_tres,
    ojetivo_texto_tres,
    perfil_titulo_uno,
    perfil_texto_uno,
    perfil_titulo_dos,
    perfil_texto_dos,
    perfil_titulo_tres,
    perfil_texto_tres,
  } = curso;

  const contenido = process.env.dev === "true" ? JSON.parse(acerca_curso) : acerca_curso;
  return (
    <main className="flex flex-col">
      {/* {pais.country} */}

      <CursoHeader
        nombre={nombre}
        id={id}
        descripcion={descripcion}
        modalidades={modalidades}
        videoid={videoid}
        tipo={"formacion"}
      />

      <CursoFormacionAcerca
        duracion={duracion}
        acerca_curso={contenido}
        dedicacion={dedicacion}
        frecuencia={frecuencia}
        modalidades={modalidades}
        nombre={nombre}
      />
      <Separator className="my-6" />
      <CursoFormacionObjetivos
        id={id}
        ojetivo_titulo_uno={ojetivo_titulo_uno}
        ojetivo_texto_uno={ojetivo_texto_uno}
        ojetivo_titulo_dos={ojetivo_titulo_dos}
        ojetivo_texto_dos={ojetivo_texto_dos}
        ojetivo_titulo_tres={ojetivo_titulo_tres}
        ojetivo_texto_tres={ojetivo_texto_tres}
        perfil_titulo_uno={perfil_titulo_uno}
        perfil_texto_uno={perfil_texto_uno}
        perfil_titulo_dos={perfil_titulo_dos}
        perfil_texto_dos={perfil_texto_dos}
        perfil_titulo_tres={perfil_titulo_tres}
        perfil_texto_tres={perfil_texto_tres}
      />

      <CertificacionCursoFormacion nombre={nombre} />
      <Separator className="my-6" />
      <CursosContenido modulos={modulos} incluyeSkillClass={true} />
      <Separator className="my-6" />
      <CursoFormacionRequisitos />
      {/* modalidades y pago */}
      <Separator className="my-6" />
      <CursoFormacionModalidades modalidades={modalidades} curso={curso} nombre={nombre} tipo={"CURSO DE FORMACION"} campaign={true} />
      <Separator className="my-6" />
      {/*    <BecaAsesorate /> */}
      <Separator className="my-6" />
      <EquipoProfesional
        titulo="Conoce al equipo de"
        titulo2="Trainers Educativos"
        titulo2Class="text-idaclass3"
        titulo3="que te guiará al éxito"
      />
      <CasosExito />
      <Separator className="my-6" />
      <CursoFormacionOtrosCursos cursos={cursos} />
  
    </main>
  );
};

export default CursoPage;
