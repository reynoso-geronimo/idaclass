"use client";

import { Button } from "@/components/ui/button";
import { DataTableColumnHeader } from "../data-table-column-header";
import { Download } from "lucide-react";

function downloadCSV(data) {
  const headers = [
    "ID",
    "Nombre",
    "Apellido",
    "Email",
    "Teléfono",
    "Fecha de Registro",
  ];

  const csvContent = [
    headers.join(","),
    ...data.map(row => {
      const fecha = row.created_at 
        ? new Date(row.created_at).toLocaleString('es-AR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
          })
        : '';
      return [
        row.id,
        `"${row.nombre || ''}"`,
        `"${row.apellido || ''}"`,
        `"${row.email || ''}"`,
        `"${row.telefono || ''}"`,
        `"${fecha}"`,
      ].join(",");
    }),
  ].join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `registros-evento-${new Date().toISOString().split('T')[0]}.csv`;
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
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID" />
    ),
  },
  {
    accessorKey: "nombre",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nombre" />
    ),
  },
  {
    accessorKey: "apellido",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Apellido" />
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
      <DataTableColumnHeader column={column} title="Teléfono" />
    ),
  },
  {
    accessorKey: "created_at",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Fecha de Registro" />
    ),
    cell: ({ row }) => {
      const fecha = row.getValue("created_at");
      if (!fecha) return "-";
      return new Date(fecha).toLocaleString('es-AR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      });
    },
  },
];

