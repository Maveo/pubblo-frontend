import fs from 'fs';
import path from 'path';
import '@angular/compiler';
import { MockApiRoutes } from '../src/app/shared/api/interceptors/mock-api/mock-routes';

// Get output path from command-line args
const [, , outputArg] = process.argv;
if (!outputArg) {
  console.error('❌ Please provide an output path. Usage: npm run generate -- ./output/openapi.json');
  process.exit(1);
}
const outputPath = path.resolve(process.cwd(), outputArg);

const openApiSpec: any = {
  openapi: '3.0.0',
  info: {
    title: 'Mock API',
    version: '1.0.0',
  },
  paths: {},
};

for (const route of MockApiRoutes) {
  const method = route.req.method.toLowerCase();
  const rawUrl = route.req.url;

  const pathUrl = rawUrl.replace(/{(\w+)}/g, (_, p1) => `{${p1}}`);

  const pathParams = [...pathUrl.matchAll(/{(\w+)}/g)].map(([, name]) => ({
    name,
    in: 'path',
    required: true,
    schema: { type: 'string' },
  }));

  const pathEntry = openApiSpec.paths[pathUrl] ||= {};

  pathEntry[method] = {
    summary: `${method.toUpperCase()} ${pathUrl}`,
    parameters: pathParams,
    requestBody: route.req.body
      ? {
          content: {
            'application/json': {
              example: route.req.body,
            },
          },
        }
      : undefined,
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            example: (() => {
              try {
                const fakeReq = { ...route.req };
                const res = route.res(<any>fakeReq);
                return res.body;
              } catch {
                return {}; // fallback
              }
            })(),
          },
        },
      },
    },
  };
}

// Write OpenAPI JSON to the given path
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify(openApiSpec, null, 2));
console.log(`✅ OpenAPI spec written to: ${outputPath}`);
