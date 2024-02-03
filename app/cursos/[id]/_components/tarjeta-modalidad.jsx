import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

const TarjetaModalidad = ({ modalidad, precio, duracion }) => {
  return (
    <Card className="w-56 text-center bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-idaclass3 to-indigo-900 text-white ">
      <CardHeader>
        <CardTitle className="bg-emerald-400 font-extrabold relative -top-10 p-2 rounded-tl-3xl rounded-br-3xl">
          {modalidad || "ONLINE"}
        </CardTitle>
        <CardDescription className="font-bold text-white text-lg">$ {precio || "PRECIO"}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          {duracion || "XX"} pagos sin interes al mes, 20% de descuento en un
          solo pago.
        </p>
      </CardContent>
      <CardFooter className="flex justify-center"> 
        <Button size="lg" className="bg-fuchsia-500 text-white m-auto">
          Comprar ahora <ChevronRight />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TarjetaModalidad;
