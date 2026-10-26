// Local preview for Next.js output: 'export'. No API or form endpoint is served.
import { createServer } from 'node:http';
import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import path from 'node:path';
const root=path.resolve('out');
const args=process.argv.slice(2);const port=Number(args[args.indexOf('--port')+1])||Number(process.env.PORT)||3000;
const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp','.avif':'image/avif','.ttf':'font/ttf','.woff2':'font/woff2','.txt':'text/plain; charset=utf-8','.xml':'application/xml'};
createServer(async(req,res)=>{
 if(!['GET','HEAD'].includes(req.method)){res.writeHead(405);res.end('Method not allowed');return;}
 try{
  const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
  let file=path.resolve(root,'.'+pathname);
  if(file!==root&&!file.startsWith(root+path.sep)){res.writeHead(403);res.end();return;}
  let info;try{info=await stat(file);if(info.isDirectory()){file=path.join(file,'index.html');info=await stat(file);}}catch{file=path.join(root,'404.html');info=await stat(file);res.statusCode=404;}
  res.setHeader('Content-Type',mime[path.extname(file)]||'application/octet-stream');res.setHeader('Content-Length',info.size);res.setHeader('X-Content-Type-Options','nosniff');
  res.setHeader('Cache-Control',pathname.startsWith('/_next/static/')?'public, max-age=31536000, immutable':'no-cache');
  if(req.method==='HEAD')res.end();else createReadStream(file).pipe(res);
 }catch{res.writeHead(400);res.end('Bad request');}
}).listen(port,'127.0.0.1',()=>console.log(`KrediCars sunum: http://127.0.0.1:${port}`));
