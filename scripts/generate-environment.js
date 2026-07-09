const fs = require("fs");

const { SUPABASE_URL, SUPABASE_KEY } = process.env;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  throw new Error("Faltan SUPABASE_URL o SUPABASE_KEY");
}

const content = `export const environment = {
  production: true,
  supabaseUrl: '${SUPABASE_URL}',
  supabaseKey: '${SUPABASE_KEY}'
};
`;

fs.writeFileSync(
  "src/app/environments/environment.prod.ts",
  content
);

console.log("✅ environment.prod.ts generado");