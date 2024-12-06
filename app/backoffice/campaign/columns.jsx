"use client";

import { Button } from "@/components/ui/button";
import { DataTableColumnHeader } from "../data-table-column-header";
import { Download } from "lucide-react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
function downloadCSV(data) {
  const headers = [
    "ID",
    "Nombre",
    "Apellido",
    "Telefono",
    "Curso",
    "Email",
    "UTM Source",
    "UTM Medium",
    "UTM Campaign",
    "UTM Term",
    "UTM Content",
  ];

  const csvContent = [
    headers.join(","),
    ...data.map(row =>
      [
        row.id,
        row.nombre,
        row.apellido,
        row.telefono,
        row.curso,
        row.email,
        row.utm_source,
        row.utm_medium,
        row.utm_campaign,
        row.utm_term,
        row.utm_content,
      ].join(",")
    ),
  ].join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "contactos.csv";
  link.click();
}
export function ExportButton({ data }) {
  return (
    <Button onClick={() => downloadCSV(data)} variant="outline" size="sm">
      <Download className="mr-2 h-4 w-4" />
      Exportar CSV
    </Button>
  );
}
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
