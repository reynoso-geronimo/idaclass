import cursoImage from "../../../public/funcional.webp";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { InfoIcon, ShoppingCart, UsersIcon } from "lucide-react";
import Image from "next/image";

const ShopCursoCard = () => {
  return (
    <Card className={"w-[90%] sm:w-[40%] lg:w-[30%]"}>
      <CardContent className={"p-0"}>
        <Image src={cursoImage} alt="curso" />
      </CardContent>
      <CardHeader className="p-2">
        <CardTitle>Titulo del Curso</CardTitle>
        <CardDescription>
          <span className="flex items-center mb-4">
            <UsersIcon />
            123123123
          </span>
          <span className="flex items-center">
            <InfoIcon
              color="white"
              size={42}
              className="bg-sky-700 rounded-full mr-2 shrink-0"
            />
            <span>por idaclassacademy en ONLINE, PRESENCIAL</span>
          </span>
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between items-center px-1 py-2 w-full border-t-2">
        <span>$90000</span>
        <Button size="sm" className="flex justify-around">
          <ShoppingCart />
          Añadir al carrito
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ShopCursoCard;
