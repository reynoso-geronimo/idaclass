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

const ShopCursoCard = ({ curso }) => {
  return (
    <Card className={"w-[90%] sm:w-[40%] lg:w-[40%] max-w-[400px] min-h-[350px] relative"}>
      <CardContent className={"p-0 "}>
        <Image
          src={`/${curso.attributes.Imagen}`}
          alt="curso"
          width={400}
          height={300}
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </CardContent>
      <CardHeader className="p-2">
        <CardTitle className='h-12 align-text-bottom'>{curso.attributes.Nombre}</CardTitle>
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
            <span>{`por idaclassacademy : ${curso.attributes.Modalidad}`}</span>
          </span>
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between items-center px-1 py-2 w-full border-t-2">
        <span>{`$ ${curso.attributes.Precio}`}</span>
        <Button size="sm" className="flex gap-4 items-center">
          <ShoppingCart />
          <p>Añadir</p>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ShopCursoCard;
