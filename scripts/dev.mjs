import { spawn } from 'node:child_process';
const args=process.argv.slice(2);
const nextArgs=[];
for(let i=0;i<args.length;i++){
 if(args[i]==='--strictPort')continue;
 nextArgs.push(args[i]==='--host'?'--hostname':args[i]);
}
const child=spawn(process.execPath,['node_modules/next/dist/bin/next','dev',...nextArgs],{stdio:'inherit'});
child.on('exit',code=>process.exit(code??1));
for(const signal of ['SIGINT','SIGTERM'])process.on(signal,()=>child.kill(signal));
