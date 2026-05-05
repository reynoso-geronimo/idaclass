import { NextResponse } from "next/server";
import { appendLeadRow } from "@/lib/google-sheets";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SHEET_TAB = {
  gym: "duenos",
  coord: "coordinadores",
  stu: "personal_trainers",
};

const COLUMN_ORDER = {
  gym: ["timestamp", "nombre", "gimnasio", "whatsapp", "provincia"],
  coord: ["timestamp", "nombre", "gimnasio", "whatsapp", "tamanoEquipo", "areaPrioritaria"],
  stu: ["timestamp", "nombre", "whatsapp", "modalidad", "inicio"],
};

export async function POST(req) {
  try {
    const body = await req.json();
    const { profile, ...data } = body || {};

    if (!profile || !SHEET_TAB[profile]) {
      return NextResponse.json({ error: "invalid profile" }, { status: 400 });
    }

    const row = COLUMN_ORDER[profile].map((key) =>
      key === "timestamp" ? new Date().toISOString() : (data[key] ?? "")
    );

    await appendLeadRow(SHEET_TAB[profile], row);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[landing-fitness-negocios] error:", err);
    return NextResponse.json({ error: "internal" }, { status: 500 });
  }
}
