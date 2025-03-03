import { Button } from "@/components/ui/button";

import PersonalTrainer from "../../../public/v2/Personal-Trainer.png";
import Certificados from "../../../public/v2/certificados.png";
import Certificacion from "../../../public/v2/Certificacion.png";
import Skillclass from "../../../public/v2/skillclass.png";
import Contenidos from "../../../public/v2/Contenidos.png";
import Flecha from "../../../public/v2/Flecha.png";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import CampaignForm from "../components/campaignForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import CasosExito from "@/components/casos-exito";
import CursosContenido from "../components/CursosContenido";
import { getCursoFormacionFromDB } from "@/app/actions";
import TituloSeccion from "@/components/ui/titulo-seccion";
import Header from "../components/Header";
import Link from "next/link";
import CursoFormacionModalidades from "@/app/cursos-formacion/[nombre]/_components/cursoFormacionModalidades";
import { Separator } from "@/components/ui/separator";
import Sedes from "@/components/ui/sedes";
import { Sede } from "@/models/assosiations";
import { Horario } from "@/models/assosiations";
import { CursosFormacion } from "@/models/assosiations";

const page = async () => {
  const curso = await getCursoFormacionFromDB("Personal Trainer");
  const sedesWithSchedules = await Sede.findAll({
    include: [
      {
        model: Horario,
        required: true,
        include: [
          {
            model: CursosFormacion,
            through: "horarios_cursos_formacion_links",
            where: { id: 1 },
            required: true,
          },
        ],
      },
    ],
  });
  return (
    <main className="flex flex-col justify-start grow">
      <div className="bg-[#3A5DAE] text-white font-bold py-4 mt-0 flex flex-col sm:flex-row justify-center items-center sticky top-0 z-50">
        <div className="flex items-center justify-center max-sm:max-w-80">
          <Header />
        </div>
        <Button size="sm" className="bg-green-500 hover:bg-green-500/50 rounded-3xl w-fit lg:hidden">
          <Link href="#form">QUIERO INSCRIBIRME</Link>
        </Button>
        <Button size="sm" className="bg-green-500 hover:bg-green-500/50 rounded-3xl w-fit max-lg:hidden">
          <Link href="#form-lg">QUIERO INSCRIBIRME</Link>
        </Button>
      </div>
      <section className="relative w-full text-white lg:hidden">
        <Image src={PersonalTrainer} alt="Personal Trainer" className="object-cover w-full h-auto" />
        <div className="absolute space-y-2 bottom-10 left-8">
          <Badge className={"bg-orange-500 border border-white py-1.5"}>CURSO PRESENCIAL</Badge>
          <h1 className="text-4xl font-black">
            Conviértete en <br />
            Personal Trainer
          </h1>
          <h2
            className="text-sm"
            style={{ textShadow: "-0.5px -0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px 0.5px 0 #000, 0.5px 0.5px 0 #000" }}
          >
            Transforma tu pasión en una carrera de éxito
          </h2>
        </div>
      </section>
      <section className="container relative flex justify-between w-full gap-4 mt-12 max-lg:hidden">
        <Image
          src={PersonalTrainer}
          alt="Personal Trainer"
          className="object-cover object-top w-[380px] h-[500px] rounded-3xl"
        />

        <div className="space-y-2">
          <Badge variant={"outline"} className={"border-orange-500 border-2 text-orange-500 py-1.5"}>
            CURSO PRESENCIAL
          </Badge>
          <h1 className="text-4xl font-black text-idaclass5">
            Conviértete en <br />
            Personal Trainer
          </h1>
          <h2 className="relative text-xl font-bold text-idaclass">
            Transforma tu pasión en una carrera de éxito
            <Image src={Flecha} alt="" className="absolute -right-8 -bottom-8 rotate-12" height={54} width={165} />
          </h2>
          <ul className="my-12 space-y-8">
            <li className="flex items-center gap-2">
              <Check className="bg-idaclass rounded-full text-white p-0.5" />
              Obtén tu certificado y destácate
            </li>
            <li className="flex items-center gap-2">
              <Check className="bg-idaclass rounded-full text-white p-0.5" />
              Trabaja en gimnasios en solo unos meses
            </li>
            <li className="flex items-center gap-2">
              <Check className="bg-idaclass rounded-full text-white p-0.5" />
              Ayuda a otros a cumplir sus metas de bienestar
            </li>
            <li className="flex items-center gap-2">
              <Check className="bg-idaclass rounded-full text-white p-0.5" />
              Conviértete en tu propio jefe
            </li>
          </ul>
        </div>
        <div id="form-lg" />
        <div className="w-[300px]">
          <CampaignForm nombre={"Personal Trainer"} />
        </div>
      </section>

      <ul className="px-4 my-12 space-y-8 lg:hidden">
        <li className="flex items-center gap-2">
          <Check className="bg-idaclass rounded-full text-white p-0.5" />
          Obtén tu certificado y destácate
        </li>
        <li className="flex items-center gap-2">
          <Check className="bg-idaclass rounded-full text-white p-0.5" />
          Trabaja en gimnasios en solo unos meses
        </li>
        <li className="flex items-center gap-2">
          <Check className="bg-idaclass rounded-full text-white p-0.5" />
          Ayuda a otros a cumplir sus metas de bienestar
        </li>
        <li className="flex items-center gap-2">
          <Check className="bg-idaclass rounded-full text-white p-0.5" />
          Conviértete en tu propio jefe
        </li>
      </ul>
      <div className="lg:hidden" id="form">
        <CampaignForm nombre={"Personal Trainer"} />
      </div>
      <section className="container p-4 space-y-4">
        <h2 className={"text-idaclass5 text-4xl font-black text-center px-4"}>¿Qué aprenderás en este curso?</h2>
        <p className="text-center text-pretty">
          En el curso de Personal Trainer de Idaclass, aprenderás a diseñar entrenamientos personalizados, comprenderás
          la anatomía y fisiología del cuerpo, dominarás técnicas de entrenamiento funcional, HIIT y nutrición para el
          fitness. Además, estarás preparado para trabajar en gimnasios o de forma independiente, aplicando todo lo
          aprendido desde el primer día.
        </p>
        <div className="relative isolate z-[1] size-full aspect-video max-w-2xl mx-auto overflow-hidden rounded-2xl border-2 border-white">
          <iframe
            src={"https://youtube.com/embed/IzlOOhNzGF4"}
            className="size-full rounded-2xl"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </section>
      <section className="p-4 space-y-4 bg-gray-200 lg:hidden">
        <h2 className={"text-idaclass5 text-3xl font-black text-center px-4"}>
          🎓 Obtén <br /> Certificación:
        </h2>
        <h2 className={"text-idaclass text-3xl font-black text-center px-4"}>impulsa tu carrera</h2>
        <h3 className="font-bold text-center text-idaclass">Este curso brinda 4 certificados:</h3>
        <Image src={Certificados} alt="Certificados" className="object-cover w-full h-auto" />
        <p className="text-center">
          <span className="font-bold text-idaclass">Obtén tu certificado IdaClass</span>{" "}
          <span className="font-bold">
            respaldado por 25 años de trayectoria y con más de 50.000 certificados en Latinoamérica.
          </span>{" "}
          Accede a la Certificación de extensión universitaria.
        </p>
      </section>

      <section className="space-y-4 bg-gray-200 max-lg:hidden">
        <div className="container flex justify-around h-full grow">
          <div className="flex flex-col justify-around w-1/2">
            <div>
              <h2 className={"text-idaclass5 text-3xl font-black  px-4"}>🎓 Obtén Certificación:</h2>
              <h2 className={"text-idaclass text-3xl font-black px-4"}>impulsa tu carrera</h2>
              <h3 className="px-4 font-bold text-idaclass">Este curso brinda 4 certificados:</h3>
            </div>
            <Image src={Certificados} alt="Certificados" className="object-cover w-full h-auto" quality={100} />
            <p className="">
              <span className="font-bold text-idaclass">Obtén tu certificado IdaClass</span>{" "}
              <span className="font-bold">
                respaldado por 25 años de trayectoria y con más de 50.000 certificados en Latinoamérica.
              </span>{" "}
              Accede a la Certificación de extensión universitaria.
            </p>
          </div>
          <div className="relative">
            <Image src={Certificacion} alt="Certificados" className="object-contain" height={500} />
          </div>
        </div>
      </section>

      <section className="p-4 space-y-4">
        <h2 className={"text-idaclass5 text-3xl font-black text-center px-4"}>
          ¿Cómo te ayudamos a cumplir tus objetivos?
        </h2>
        <div className="flex flex-col items-center gap-4 px-4 ">
          <Accordion
            type="single"
            collapsible
            className="flex flex-col items-center justify-center w-full lg:flex-row lg:justify-center"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="flex items-center justify-center w-full" arrow={false}>
                <div className="flex flex-col items-center justify-center gap-2 lg:min-w-80 ">
                  <div className="flex items-center justify-center font-semibold text-center text-white bg-orange-500 rounded-full size-7">
                    1
                  </div>
                  <h1 className="text-lg font-bold text-center text-idaclass">
                    Te brindamos clases <br />
                    en vivo con expertos
                  </h1>
                </div>
              </AccordionTrigger>
              <AccordionContent className=" lg:max-w-80">
                <p className="text-center text-pretty">
                  Lo que te permite aclarar tus dudas al instante. Con nuestra plataforma podrás acceder al material de
                  estudio de forma sencilla, trabajarás en equipo y desarrollarás proyectos propios, con el apoyo de tus
                  compañeros y tutores.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="flex items-center justify-center w-full" arrow={false}>
                <div className="flex flex-col items-center justify-center gap-2 lg:min-w-80 ">
                  <div className="flex items-center justify-center font-semibold text-center text-white bg-orange-500 rounded-full size-7">
                    2
                  </div>
                  <h1 className="text-lg font-bold text-center text-idaclass">
                    Te ayudamos a alcanzar <br />
                    tus metas profesionales
                  </h1>
                </div>
              </AccordionTrigger>
              <AccordionContent className=" lg:max-w-80">
                <p className="text-center text-pretty">
                  Te equipamos con todas las habilidades claves para alcanzar tus metas profesionales, crear tu marca
                  personal hasta atraer a tus primeros clientes y convertirte en un experto en el manejo de clientes.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="flex items-center justify-center w-full" arrow={false}>
                <div className="flex flex-col items-center justify-center gap-2 lg:min-w-80 ">
                  <div className="flex items-center justify-center font-semibold text-center text-white bg-orange-500 rounded-full size-7">
                    3
                  </div>
                  <h1 className="text-lg font-bold text-center text-idaclass">
                    Te preparamos para tu trabajo <br /> soñado desde el primer dia
                  </h1>
                </div>
              </AccordionTrigger>
              <AccordionContent className=" lg:max-w-80">
                <p className="text-center text-pretty">
                  Con prácticas laborales reales y acceso a nuestra bolsa de empleo, te asesoramos para que emprendas o
                  empieces a trabajar de inmediato. ¡Todo lo que necesitas para lanzarte al éxito!
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Button size="sm" className="bg-green-500 hover:bg-green-500/50 rounded-3xl w-fit lg:hidden">
            <Link href="#form"> QUIERO INSCRIBIRME </Link>
          </Button>
          <Button size="sm" className="bg-green-500 hover:bg-green-500/50 rounded-3xl w-fit max-lg:hidden">
            <Link href="#form-lg"> QUIERO INSCRIBIRME </Link>
          </Button>
        </div>
      </section>
      <section className="p-4 space-y-6 bg-gray-200 lg:hidden">
        <div className="space-y-2">
          <h2 className={"text-idaclass5 text-3xl font-black text-center px-4"}>🎁 Recibe tu </h2>
          <h2 className={"text-idaclass text-3xl font-black text-center px-4"}>Beneficio Exclusivo</h2>
        </div>
        <p className="text-center">
          Con tu inscripción accedes a 4 formaciones extras totalmente gratis para que aprendas como generar ingresos
          haciendo lo que amas:
        </p>

        <Image src={Skillclass} alt="skillclass" className="object-cover w-full h-auto" />
      </section>

      <section className="p-4 space-y-6 bg-gray-200 max-lg:hidden">
        <div className="flex flex-col max-w-4xl mx-auto ">
          <h2 className={"text-idaclass5 text-3xl font-black  "}>
            🎁 Recibe tu
            <span className={"text-idaclass text-3xl font-black  "}> Beneficio Exclusivo</span>
          </h2>
          <div className="flex items-center justify-center gap-8">
            <p className="w-1/2">
              Con tu inscripción accedes a 4 formaciones extras totalmente gratis para que aprendas como generar
              ingresos haciendo lo que amas:
            </p>

            <Image src={Skillclass} alt="skillclass" className="w-1/2" />
          </div>
        </div>
      </section>
      <section className="lg:hidden">
        <CursosContenido modulos={curso.modulos} />
      </section>
      <section className="container flex flex-wrap items-center justify-center mb-12 max-lg:hidden gap-x-24 ">
        <TituloSeccion className={"w-full"}>Programa de Estudio</TituloSeccion>
        <CursosContenido modulos={curso.modulos} />
        <Image src={Contenidos} alt="skillclass" className="object-contain w-1/3" />
      </section>
      {/*  <section className="items-center justify-center px-4 mt-12 space-y-2 lg:flex lg:bg-gray-200">
        <div className="max-w-3xl lg:w-1/2 lg:space-y-12">
          <h2 className={"text-idaclass5 text-3xl lg:text-5xl font-black text-center px-4 text-pretty lg:text-left"}>
            ¡No estás solo!
            <br />
            Podemos acompañarte a cumplir tus metas con éxito
          </h2>
          <p className="text-center lg:text-left lg:px-4">
            Si aun tienes dudas te invitamos a ver contenido mas detallado o completa este breve formulario y nuestro
            equipo se podrá en contacto contigo a la brevedad.
          </p>
        </div>
        <div className="lg:w-1/4">
          <CampaignForm short={true} />
        </div>
      </section> */}
      <CursoFormacionModalidades
        modalidades={"Online - Presencial"}
        curso={curso}
        nombre={curso.nombre}
        tipo={"CURSO DE FORMACION"}
      />
      {sedesWithSchedules.length > 0 && (
        <>
          <Separator className="my-6" />
          <Sedes
            locations={sedesWithSchedules}
            showHours={true}
            title="Sedes disponibles para este curso"
            modalidad={"PRESENCIAL"}
            nombre={"Personal Trainer"}
            tipo={"CURSO DE FORMACION"}
          />
        </>
      )}

      <CasosExito variant={"secondary"} />
    </main>
  );
};

export default page;
