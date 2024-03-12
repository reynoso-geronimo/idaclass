import Modalidad from "@/app/(root)/_components/modalidad";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ChevronRight, MonitorPlay, Users } from "lucide-react";

const TarjetaModalidad = ({ modalidad }) => {
  return (
    <Card className="border border-black w-[24rem]">
      <CardHeader>
        <CardTitle className="font-extrabold">
          <Badge>Incluye BecaClass</Badge>
          {modalidad === "ONLINE" ? (
            <p>
              <MonitorPlay
                size={30}
                className="inline stroke-emerald-800 my-4"
              />
              Modalidad ONLINE
            </p>
          ) : (
            <p>
              <Users size={30} className="inline stroke-red-800 my-4" />
              Modalidad Presencial
            </p>
          )}
        </CardTitle>
        <CardDescription className="font-bold text-white text-lg"></CardDescription>
      </CardHeader>
      <CardContent>
        <p></p>
      </CardContent>

      <CardFooter className="flex flex-col">
        <Separator className="mb-2 bg-black" />
        <Button size="lg" className="text-white">
          Inscribirme ahora
          <ChevronRight />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TarjetaModalidad;
