import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
const CursoCard = ({ titulo = "Curso", modalidad = "Modalidad" }) => {
  return (
    <Card className="border-2 rounded-lg m-2">
      <CardContent className="p-0">
        <Image src={`/funcional.webp`} alt="alt" width={1000} height={700} className="rounded-t-md"/>
      </CardContent>
      <CardHeader>
        <CardTitle>{titulo}</CardTitle>
        <CardDescription>{modalidad}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default CursoCard;
