// Next 16.4's Windows export leaves backslash-based segment payloads nested.
// The browser requests their flattened dot-separated names. Keep originals and
// add portable copies to the generated output; never change framework sources.
import { readdir,copyFile } from 'node:fs/promises';
import path from 'node:path';
const root=path.resolve('out');let copied=0;
async function visit(directory){for(const entry of await readdir(directory,{withFileTypes:true})){const file=path.join(directory,entry.name);if(entry.isDirectory())await visit(file);else if(entry.name.endsWith('.txt')){const parts=path.relative(root,file).split(path.sep);const segment=parts.findIndex(p=>p.startsWith('__next.'));if(segment>=0&&segment<parts.length-1){const target=path.join(root,...parts.slice(0,segment),parts.slice(segment).join('.'));await copyFile(file,target);copied++;}}}}
await visit(root);console.log(`Static export ready (${copied} Windows segment payloads normalized).`);
