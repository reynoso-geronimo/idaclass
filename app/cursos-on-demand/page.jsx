import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Page = () => {
  return (
    <Tabs defaultValue="categoria1" className="flex-1 container mt-4">
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

      <TabsList className="hidden lg:flex w-full justify-around bg-idaclass2 ">
        <TabsTrigger value="categoria1" className="uppercase data-[state=active]:bg-idaclass bg-idaclass4 text-white data-[state=active]:text-white data-[state=active]:font-extrabold">categoria1</TabsTrigger>
        <TabsTrigger value="categoria2" className="uppercase data-[state=active]:bg-idaclass bg-idaclass4 text-white data-[state=active]:text-white data-[state=active]:font-extrabold">categoria2</TabsTrigger>
        <TabsTrigger value="categoria3" className="uppercase data-[state=active]:bg-idaclass bg-idaclass4 text-white data-[state=active]:text-white data-[state=active]:font-extrabold">categoria3</TabsTrigger>
        <TabsTrigger value="categoria4" className="uppercase data-[state=active]:bg-idaclass bg-idaclass4 text-white data-[state=active]:text-white data-[state=active]:font-extrabold">categoria4</TabsTrigger>
        <TabsTrigger value="categoria5" className="uppercase data-[state=active]:bg-idaclass bg-idaclass4 text-white data-[state=active]:text-white data-[state=active]:font-extrabold">categoria5</TabsTrigger>
        <TabsTrigger value="categoria6" className="uppercase data-[state=active]:bg-idaclass bg-idaclass4 text-white data-[state=active]:text-white data-[state=active]:font-extrabold">categoria6</TabsTrigger>
        <TabsTrigger value="categoria7" className="uppercase data-[state=active]:bg-idaclass bg-idaclass4 text-white data-[state=active]:text-white data-[state=active]:font-extrabold">categoria7</TabsTrigger>
      </TabsList>

      <TabsContent value="categoria1">
        Make changes to your categoria1 here.
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
  );
};

export default Page;
