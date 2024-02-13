"use server";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { getCursosFromDB } from "../actions";
import CursoOnDemand from "./_components/curso-on-demand-card";
import { Separator } from "@/components/ui/separator";

const Page = async () => {
  const cursos = await getCursosFromDB();
  return (
    <main className="bg-gray-200">
      <Tabs defaultValue="categoria1" className="flex-1  mt-4 lg:mt-0">
        <DropdownMenu>
          <div className="w-full flex justify-center ">
            <Button
              asChild
              size="sm"
              className="lg:hidden uppercase font-bold text-lg"
            >
              <DropdownMenuTrigger>
                Categorias <ChevronDown />
              </DropdownMenuTrigger>
            </Button>
            <DropdownMenuContent>
              <TabsList className="flex flex-col h-full bg-gray-300 text-idaclass">
                <div className="flex flex-col h-full">
                  <TabsTrigger value="categoria1">
                    <DropdownMenuItem>categoria1</DropdownMenuItem>
                  </TabsTrigger>
                  <TabsTrigger value="categoria2">
                    <DropdownMenuItem>categoria2</DropdownMenuItem>
                  </TabsTrigger>
                  <TabsTrigger value="categoria3">
                    <DropdownMenuItem>categoria3</DropdownMenuItem>
                  </TabsTrigger>
                  <TabsTrigger value="categoria4">
                    <DropdownMenuItem>categoria4</DropdownMenuItem>
                  </TabsTrigger>
                  <TabsTrigger value="categoria5">
                    <DropdownMenuItem>categoria5</DropdownMenuItem>
                  </TabsTrigger>
                  <TabsTrigger value="categoria6">
                    <DropdownMenuItem>categoria6</DropdownMenuItem>
                  </TabsTrigger>
                  <TabsTrigger value="categoria7">
                    <DropdownMenuItem>categoria7</DropdownMenuItem>
                  </TabsTrigger>
                </div>
              </TabsList>
            </DropdownMenuContent>
          </div>
        </DropdownMenu>

        <TabsList className="hidden lg:flex w-full justify-around bg-idaclassGray2 pt-8 pb-6">
          <TabsTrigger
            value="categoria1"
            className="uppercase data-[state=active]:bg-idaclass bg-idaclass4 text-white data-[state=active]:text-white data-[state=active]:font-extrabold"
          >
            categoria1
          </TabsTrigger>
          <TabsTrigger
            value="categoria2"
            className="uppercase data-[state=active]:bg-idaclass bg-idaclass4 text-white data-[state=active]:text-white data-[state=active]:font-extrabold"
          >
            categoria2
          </TabsTrigger>
          <TabsTrigger
            value="categoria3"
            className="uppercase data-[state=active]:bg-idaclass bg-idaclass4 text-white data-[state=active]:text-white data-[state=active]:font-extrabold"
          >
            categoria3
          </TabsTrigger>
          <TabsTrigger
            value="categoria4"
            className="uppercase data-[state=active]:bg-idaclass bg-idaclass4 text-white data-[state=active]:text-white data-[state=active]:font-extrabold"
          >
            categoria4
          </TabsTrigger>
          <TabsTrigger
            value="categoria5"
            className="uppercase data-[state=active]:bg-idaclass bg-idaclass4 text-white data-[state=active]:text-white data-[state=active]:font-extrabold"
          >
            categoria5
          </TabsTrigger>
          <TabsTrigger
            value="categoria6"
            className="uppercase data-[state=active]:bg-idaclass bg-idaclass4 text-white data-[state=active]:text-white data-[state=active]:font-extrabold"
          >
            categoria6
          </TabsTrigger>
          <TabsTrigger
            value="categoria7"
            className="uppercase data-[state=active]:bg-idaclass bg-idaclass4 text-white data-[state=active]:text-white data-[state=active]:font-extrabold"
          >
            categoria7
          </TabsTrigger>
        </TabsList>
        <Separator className="my-4" />
        <TabsContent value="categoria1">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 container gap-4 justify-center">
            {cursos?.map((curso, index) => (
              <CursoOnDemand key={curso.id + index} curso={curso} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="categoria2">
          Make changes to your categoria2 here.
        </TabsContent>
        <TabsContent value="categoria3">
          Make changes to your categoria3 here.
        </TabsContent>
        <TabsContent value="categoria4">
          Make changes to your categoria4 here.
        </TabsContent>
        <TabsContent value="categoria5">
          Make changes to your categoria5 here.
        </TabsContent>
        <TabsContent value="categoria6">
          Make changes to your categoria6 here.
        </TabsContent>
        <TabsContent value="categoria7">
          Make changes to your categoria7 here.
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default Page;
