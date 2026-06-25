// Migración puntual: garantiza las columnas de Nave en la tabla `ventas` (idempotente).
// Uso: node scripts/migrate-nave-column.mjs   (lee las credenciales desde .env)
import { readFileSync } from "fs";
import mysql from "mysql2/promise";

function loadEnv(path) {
  const env = {};
  for (const line of readFileSync(path, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!(key in env)) env[key] = value; // la primera aparición gana
  }
  return env;
}

const env = loadEnv(".env");

const conn = await mysql.createConnection({
  host: env.DB_HOST,
  user: env.DB_USER,
  password: env.DB_PASS,
  database: env.DB_NAME,
  port: Number(env.DB_PORT) || 3306,
});

// Columnas a garantizar en la tabla ventas (nombre + DDL). Constantes del código, no input.
const columnas = [
  { name: "payment_id_nave", ddl: "VARCHAR(255) NULL UNIQUE" },
  { name: "external_payment_id", ddl: "VARCHAR(255) NULL" },
  { name: "payment_code", ddl: "VARCHAR(255) NULL" },
];

try {
  for (const col of columnas) {
    const [rows] = await conn.query("SHOW COLUMNS FROM ventas LIKE ?", [col.name]);
    if (rows.length === 0) {
      await conn.query(`ALTER TABLE ventas ADD COLUMN ${col.name} ${col.ddl}`);
      console.log(`OK: columna ${col.name} agregada.`);
    } else {
      console.log(`OK: la columna ${col.name} ya existia, sin cambios.`);
    }
  }
  const [desc] = await conn.query("SHOW COLUMNS FROM ventas");
  console.log("Columnas actuales en ventas:", desc.map(c => c.Field).join(", "));
} finally {
  await conn.end();
}
