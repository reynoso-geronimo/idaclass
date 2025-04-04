import { getAllContactosFromDB } from "@/app/actions";
import { DataTable } from "../data-table";
import { columns, ExportButton } from "./columns";
export const revalidate = 1;
const page = async () => {
  const Contacto = await getAllContactosFromDB();
  console.log(Contacto);
  return (
    <main>
      <div className="container pt-2">
       
        <ExportButton data={Contacto} />
      </div>
      <DataTable columns={columns} data={Contacto} />
    </main>
  );
};

export default page;
