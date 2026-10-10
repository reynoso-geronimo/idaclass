import { defineConfig } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig([{
    extends: [...nextCoreWebVitals],
    rules: {
        // Reglas nuevas del React Compiler (eslint-plugin-react-hooks 7, vía eslint-config-next 16).
        // Se bajan a warning porque marcan patrones preexistentes en carruseles, checkout y formularios.
        "react-hooks/set-state-in-effect": "warn",
        "react-hooks/immutability": "warn",
    },
}]);
