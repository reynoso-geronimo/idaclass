import { getAllContactosFromDB } from "@/app/actions";
import { DataTable } from "../data-table";
import { columns } from "./columns";
export const revalidate = 1;
const page = async () => {
  const Contacto = await getAllContactosFromDB();
  console.log(Contacto);
  return (
    <main className="">
      <DataTable columns={columns} data={Contacto} />
    </main>
  );
};

export default page;
