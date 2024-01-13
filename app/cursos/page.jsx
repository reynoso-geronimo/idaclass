import TodosCuros from "./_components/ver-cursos";
import { getCursosFromDB } from "../actions";

const Page = async () => {
const cursosFromDB = await getCursosFromDB()

  return (
    <TodosCuros cursosFromDB={cursosFromDB}/>
  );
};

export default Page;
