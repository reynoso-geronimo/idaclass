"use client";
import { Sliders } from "lucide-react";
import ShopCursoCard from "./components/shop-curso-card";
import { Combobox } from "@/components/ui/comboBox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { getCursosFromDB } from "../actions";
import { Checkbox } from "@/components/ui/checkbox";

const Page = () => {
  const [showPresencial, setShowPresencial] = useState(true);
  const [showOnline, setShowOnline] = useState(true);
  const [showHibrido, setShowHibrido] = useState(true);
  const [cursos, setCursos] = useState([]);
  const [cursosFiltrados, setCursosFiltrados] = useState([]);

  useEffect(() => {
    const fetchCursos = async () => {
      const data = await getCursosFromDB();
      setCursos(data);
      setCursosFiltrados(data);
    };
    fetchCursos();
  }, []);

  const applyFilters = () => {

   const filtrados = cursos.filter((curso) =>((curso.modalidad === "Online" && showOnline) || (curso.modalidad === "Presencial" && showPresencial) || (curso.modalidad=== "Hibrido" && showHibrido)))
  setCursosFiltrados(filtrados)
  }

  return (
    <main className="p-6 min-h-[100svh] md:flex items-start">
      {/* <h2 className="text-6xl font-extrabold mb-4 mx-4 text-indigo-950 text-center">
        CURSOS
      </h2> */}
      <div className="flex w-full justify-around items-center mb-4 flex-wrap gap-y-4 md:hidden">
        <h3 className="text-2xl font-medium">Cursos</h3>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Sliders
              color="#09578f"
              size={36}
              className="bg-sky-200 rounded-full p-1 "
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Filtros</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem
              className="text-md"
              checked={showPresencial}
              onCheckedChange={setShowPresencial}
              onSelect={e => e.preventDefault()}
            >
              Presencial
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              className="text-md"
              checked={showOnline}
              onCheckedChange={setShowOnline}
              onSelect={e => e.preventDefault()}
            >
              Online
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              className="text-md"
              checked={showHibrido}
              onCheckedChange={setShowHibrido}
              onSelect={e => e.preventDefault()}
            >
              Hibrido
            </DropdownMenuCheckboxItem>
            <Button className="w-full rounded-lg mt-4 text-lg"onClick={applyFilters} disabled={!showHibrido&&!showOnline&&!showPresencial}>Aplicar</Button>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="w-full flex justify-center items-center">
          {/* <Combobox /> */}
        </div>
      </div>
      <div className="hidden md:block">
        <h2 className="text-2xl font-extrabold mb-4 mx-4 text-indigo-950">
          CURSOS
        </h2>
        {/* <Combobox /> */}
        <div className="flex flex-col gap-4 mt-4 mr-6">
          <div className="flex items-center gap-4">
            <Checkbox
              id="online"
              checked={showOnline}
              onCheckedChange={setShowOnline}
              className="h-8 w-8 rounded-md"
            />
            <label htmlFor="online" className="font-semibold text-lg">
              ONLINE
            </label>
          </div>
          <div className="flex items-center gap-4">
            <Checkbox
              id="presencial"
              checked={showPresencial}
              onCheckedChange={setShowPresencial}
              className="h-8 w-8 rounded-md"
            />
            <label htmlFor="presencial" className="font-semibold text-lg">
              PRESENCIAL
            </label>
          </div>
          <div className="flex items-center gap-4">
            <Checkbox
              id="hibrido"
              checked={showHibrido}
              onCheckedChange={setShowHibrido}
              className="h-8 w-8 rounded-md"
            />
            <label htmlFor="hibrido" className="font-semibold text-lg">
              HIBRIDO
            </label>
          </div>
          <Button className=" rounded-lg mt-4 text-lg" onClick={applyFilters} disabled={!showHibrido&&!showOnline&&!showPresencial}>Aplicar Filtros</Button>
        </div>
      </div>
      <div className="flex flex-col items-center sm:flex-row justify-evenly w-full flex-wrap gap-y-8 gap-x-2">
        {cursosFiltrados.map((curso, index) => (
          <ShopCursoCard key={curso.id + index} curso={curso} />
        ))}
      </div>
    </main>
  );
};

export default Page;
