"use client";
import { Sliders } from "lucide-react";
import ShopCursoCard from "./components/shop-curso-card";
import { Combobox } from "@/components/ui/comboBox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Page = () => {
  const [showPresencial, setShowPresencial] = useState(false);
  const [showOnline, setShowOnline] = useState(false);
  const [showHibrido, setShowHibrido] = useState(false);

  return (
    <main className="p-6">
      {/* <h2 className="text-6xl font-extrabold mb-4 mx-4 text-indigo-950 text-center">
        CURSOS
      </h2> */}
      <div className="flex w-full justify-around items-center mb-4 flex-wrap gap-y-4">
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
            <Button className="w-full rounded-lg mt-4 text-lg">Aplicar</Button>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="w-full flex justify-center items-center">
          <Combobox />
        </div>
      </div>

      <div className="flex flex-col items-center sm:flex-row sm:justify-center flex-wrap gap-y-8 gap-x-2 lg:gap-x-24">
        <ShopCursoCard />
        <ShopCursoCard />
        <ShopCursoCard />
        <ShopCursoCard />
        <ShopCursoCard />
        <ShopCursoCard />
        <ShopCursoCard />
        <ShopCursoCard />
        <ShopCursoCard />
        <ShopCursoCard />
        <ShopCursoCard />
        <ShopCursoCard />
        <ShopCursoCard />
        <ShopCursoCard />
        <ShopCursoCard />
        <ShopCursoCard />
      </div>
    </main>
  );
};

export default Page;
