"use client";

import { DataTableColumnHeader } from "../data-table-column-header";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export const columns = [
  {
    accessorKey: "id",
    header: ({ column }) => <DataTableColumnHeader column={column} title="ID" />,
  },
  {
    accessorKey: "nombre",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Nombre" />,
  },
  {
    accessorKey: "apellido",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Apellido" />,
  },

  {
    accessorKey: "telefono",
    header: ({ column }) => <DataTableColumnHeader column={column} title="telefono" />,
  },
  {
    accessorKey: "curso",
    header: ({ column }) => <DataTableColumnHeader column={column} title="curso" />,
  },
  {
    accessorKey: "utm_source",
    header: ({ column }) => <DataTableColumnHeader column={column} title="UTM Source" />,
  },
  {
    accessorKey: "utm_medium",
    header: ({ column }) => <DataTableColumnHeader column={column} title="UTM Medium" />,
  },
  {
    accessorKey: "utm_campaign",
    header: ({ column }) => <DataTableColumnHeader column={column} title="UTM Campaign" />,
  },
  {
    accessorKey: "utm_term",
    header: ({ column }) => <DataTableColumnHeader column={column} title="UTM Term" />,
  },
  {
    accessorKey: "utm_content",
    header: ({ column }) => <DataTableColumnHeader column={column} title="UTM Content" />,
  },
];
