// Auto-generated index.ts for Pages Functions routing
import type { Request } from 'itty-router';

import { ResumeGeneratorBackendHandler } from './ResumeGeneratorBackend';
import { AIEngineHandler } from './AIEngine';

export async function onRequest({ request }: { request: Request }): Promise<Response> {
  const url = new URL(request.url);
  const path = url.pathname;

  if (path === "/api/ResumeGeneratorBackend") return ResumeGeneratorBackendHandler(request);
  if (path === "/api/AIEngine") return AIEngineHandler(request);

  return new Response("Not found", { status: 404 });
}
