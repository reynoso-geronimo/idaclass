"use client"

import { DataTableColumnHeader } from "./data-table-column-header"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export const columns = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID" />
    ),
  },
  {
    accessorKey: "username",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nombre completo" />
    ),
  },
  
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
  },
  {
    accessorKey: "telefono",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Telefono" />
    ),
  },
  {
    accessorKey: "dni",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="DNI" />
    ),
  },
  {
    accessorKey: "pais",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="País" />
    ),
  },
  {
    accessorKey: "estado_provincia",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="estado_provincia" />
    ),
  },
  {
    accessorKey: "localidad",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="localidad" />
    ),
  },
  {
    accessorKey: "direccion",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="direccion" />
    ),
  },

]
