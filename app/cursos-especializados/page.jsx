import CursosEspecializacionHeader from "./_components/cursosEspecializacionHeader";
import CursosEspecializacionCaracteristicas from "./_components/cursosEspecializacionCaracteristicas";
import CursosEspecializacionAcerca from "./_components/cursosEspecializacionAcerca";
import { getCursosFromDB } from "../actions";
import CursosEspecializacionCategorias from "./_components/cursosEspecializacionCategorias";


const Page = async () => {
  const cursos = await getCursosFromDB()
  const todasCategorias = cursos.map(curso => curso.categorias);

  // Aplanar en un solo array
  const categorias = todasCategorias.flat();

  // Obtener solo los nombres únicos
  const CategoriasEspecializacion = [
    ...new Set(categorias.map(cat => cat.nombre)),
  ];

  return (
    <main className="mb-16">
      <CursosEspecializacionHeader />
      <CursosEspecializacionCaracteristicas />
      {/* <CursosEspecializacionAcerca /> */}
      <CursosEspecializacionCategorias categoriasOnDemand={CategoriasEspecializacion}  cursos={cursos}/>
      

      {/* //!! Codigo Viejo quizas se pueda usar */}
      {/* <Tabs
        defaultValue="categoria1"
        className="flex-1  mt-4 lg:mt-0 max-w-[1400px] mx-auto"
      >
        <DropdownMenu>
          <div className="w-full flex justify-center">
            <Button
              asChild
              size="sm"
              className="lg:hidden uppercase font-bold text-lg rounded-3xl"
            >
              <DropdownMenuTrigger>
                Categorías <ChevronDown />
              </DropdownMenuTrigger>
            </Button>
            <DropdownMenuContent>
              <TabsList className="flex flex-col h-full bg-gray-100 text-idaclass">
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

        <TabsList className="hidden  lg:flex w-full justify-around bg-gray-100 pt-8 pb-6">
          <TabsTrigger
            value="categoria1"
            className="uppercase font-bold text-idaclass3 bg-white data-[state=active]:bg-idaclass3 data-[state=active]:text-white data-[state=active]:font-extrabold rounded-3xl border-idaclass3 border"
          >
            categoria1
          </TabsTrigger>
          <TabsTrigger
            value="categoria2"
            className="uppercase font-bold text-idaclass3 bg-white data-[state=active]:bg-idaclass3 data-[state=active]:text-white data-[state=active]:font-extrabold rounded-3xl border-idaclass3 border"
          >
            categoria2
          </TabsTrigger>
          <TabsTrigger
            value="categoria3"
            className="uppercase font-bold text-idaclass3 bg-white data-[state=active]:bg-idaclass3 data-[state=active]:text-white data-[state=active]:font-extrabold rounded-3xl border-idaclass3 border"
          >
            categoria3
          </TabsTrigger>
          <TabsTrigger
            value="categoria4"
            className="uppercase font-bold text-idaclass3 bg-white data-[state=active]:bg-idaclass3 data-[state=active]:text-white data-[state=active]:font-extrabold rounded-3xl border-idaclass3 border"
          >
            categoria4
          </TabsTrigger>
          <TabsTrigger
            value="categoria5"
            className="uppercase font-bold text-idaclass3 bg-white data-[state=active]:bg-idaclass3 data-[state=active]:text-white data-[state=active]:font-extrabold rounded-3xl border-idaclass3 border"
          >
            categoria5
          </TabsTrigger>
          <TabsTrigger
            value="categoria6"
            className="uppercase font-bold text-idaclass3 bg-white data-[state=active]:bg-idaclass3 data-[state=active]:text-white data-[state=active]:font-extrabold rounded-3xl border-idaclass3 border"
          >
            categoria6
          </TabsTrigger>
          <TabsTrigger
            value="categoria7"
            className="uppercase font-bold text-idaclass3 bg-white data-[state=active]:bg-idaclass3 data-[state=active]:text-white data-[state=active]:font-extrabold rounded-3xl border-idaclass3 border"
          >
            categoria7
          </TabsTrigger>
        </TabsList>
        <Separator className="my-4" />
        <div className="container">
          <TabsContent value="categoria1">
            <TituloSeccion>CATEGORIA1</TituloSeccion>
            <div className="">
              <EmblaCarousel
                slides={cursos?.map((curso, index) => (
                  <CursoOnDemand key={curso.id + index} curso={curso} />
                ))}
              />
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
        </div>
      </Tabs> */}
    </main>
  );
};

export default Page;
