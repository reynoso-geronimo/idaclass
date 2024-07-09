"use client"

import { DataTableColumnHeader } from "../data-table-column-header"

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
    accessorKey: "descripcion",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Descripcion" />
    ),
  },
  {
    accessorKey: "monto",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="monto" />
    ),
  },
  {
    accessorKey: "pago_modalidad",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="pago_modalidad" />
    ),
  },
  {
    accessorKey: "payment_id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="payment_id_MP" />
    ),
  },
  {
    accessorKey: "payment_id_paypal",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="payment_id_paypal" />
    ),
  },
  {
    accessorKey: "user_id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="user_id" />
    ),
  },
]
