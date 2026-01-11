import { buildApp } from "./app.js";
import { env } from "./env.js";

async function start() {
  const app = buildApp();
  try {
    await app.listen({ host: env.apiHost, port: env.apiPort });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}

start();
