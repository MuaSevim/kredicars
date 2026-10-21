import type { NextConfig } from 'next';
import path from 'node:path';
const config: NextConfig = { output: 'export', trailingSlash: true, images: { unoptimized: true }, poweredByHeader: false, devIndicators: false, turbopack:{root:path.resolve(process.cwd())} };
export default config;
