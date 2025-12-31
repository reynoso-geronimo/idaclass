import { getAllRegistrosEventoFromDB } from "@/app/actions";
import { DataTable } from "../data-table";
import { columns, ExportButton } from "./columns";

export const revalidate = 1;

const page = async () => {
  const registros = await getAllRegistrosEventoFromDB();
  
  return (
    <main>
      <div className="container pt-2">
        <ExportButton data={registros} />
      </div>
      <DataTable columns={columns} data={registros} />
    </main>
  );
};

export default page;

