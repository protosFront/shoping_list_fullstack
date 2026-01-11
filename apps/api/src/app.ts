import cors from "@fastify/cors";
import Fastify from "fastify";

import { env } from "./env.js";
import { healthRoutes } from "./routes/health.js";

export function buildApp() {
  const app = Fastify();

  app.register(cors, { origin: env.corsOrigin });
  app.register(healthRoutes);

  return app;
}
