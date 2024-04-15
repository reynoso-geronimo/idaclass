"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CursosOnDemandCategoriaBar = ({categoriasOnDemand}) => {
  const pathname = usePathname();
  return (
    <nav className="container sticky top-[64px] z-50 flex items-center justify-evenly bg-gray-200 h-[100px] w-full gap-8">
      
      {categoriasOnDemand.map((categoriaOnDemand, index) => (
       
          <Link
          key={index}
            href={`/`}
            className=" rounded-2xl font-bold border-idaclass3 text-idaclass3 border-2 py-2 text-center w-full"
          >
           
               Categoria {" "}
                {categoriaOnDemand}
            
          </Link>
       
      ))}
    </nav>
  );
};

export default CursosOnDemandCategoriaBar;
