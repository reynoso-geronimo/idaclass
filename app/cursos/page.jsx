import { Sliders } from "lucide-react";
import ShopCursoCard from "./components/shop-curso-card";
import { Separator } from "@/components/ui/separator";

const Page = () => {
  return (
    <main className="p-6">
      <h2 className="text-6xl font-extrabold mb-4 mx-4 text-indigo-950 text-center">
        CURSOS
      </h2>
      <div className="flex w-full justify-around items-center mb-4">
        <h3 className="text-2xl font-medium">Cursos</h3>
        <Sliders
          color="#09578f"
          size={36}
          className="bg-sky-200 rounded-full p-1 "
        />
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
