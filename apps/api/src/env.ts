import { config as loadDotenv } from "dotenv";
import path from "node:path";
import { fileURLToPath } from "node:url";

const envPath = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  ".env"
);

loadDotenv({ path: envPath });

const required = ["API_HOST", "API_PORT", "CORS_ORIGIN"] as const;
const missing = required.filter((key) => !process.env[key]?.trim());

if (missing.length > 0) {
  console.error(
    `Missing required env var(s): ${missing.join(", ")}. Check apps/api/.env`
  );
  process.exit(1);
}

const apiPort = Number(process.env.API_PORT);
if (!Number.isInteger(apiPort) || apiPort <= 0) {
  console.error("Invalid API_PORT: must be a positive integer.");
  process.exit(1);
}

export const env = {
  apiHost: process.env.API_HOST as string,
  apiPort,
  corsOrigin: process.env.CORS_ORIGIN as string,
};
