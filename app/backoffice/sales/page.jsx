import { getAllVentasFromDB } from "@/app/actions";
import { DataTable } from "../data-table"
import { columns } from "./columns";

const page =async () => {
  const ventas = await  getAllVentasFromDB()
  console.log(ventas);
  return (
    <main className='container'>
       <DataTable columns={columns} data={ventas}/>
      </main>
  )
}

export default page