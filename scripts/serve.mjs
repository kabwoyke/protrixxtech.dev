// Minimal static server for local preview of dist/ (clean URLs + 404 page).
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const port = Number(process.env.PORT) || 8080;
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.ico': 'image/x-icon',
  '.webmanifest': 'application/manifest+json',
};

async function resolve(urlPath) {
  const safe = path.normalize(decodeURIComponent(urlPath)).replace(/^(\.\.[/\\])+/, '');
  let file = path.join(dist, safe);
  if (!file.startsWith(dist)) return null;
  try {
    const info = await stat(file);
    if (info.isDirectory()) file = path.join(file, 'index.html');
    await stat(file);
    return file;
  } catch {
    return null;
  }
}

createServer(async (req, res) => {
  const { pathname } = new URL(req.url, 'http://localhost');
  // Mirror production behaviour: directories are served with a trailing slash.
  if (!path.extname(pathname) && !pathname.endsWith('/')) {
    res.writeHead(301, { Location: `${pathname}/` });
    return res.end();
  }
  const file = await resolve(pathname);
  if (!file) {
    res.writeHead(404, { 'Content-Type': types['.html'] });
    return res.end(await readFile(path.join(dist, '404.html')));
  }
  res.writeHead(200, { 'Content-Type': types[path.extname(file)] ?? 'application/octet-stream' });
  res.end(await readFile(file));
}).listen(port, () => console.log(`Serving dist/ at http://localhost:${port}`));
