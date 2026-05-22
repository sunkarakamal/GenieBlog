import { defineConfig } from 'astro/config';

// Production config for https://github.com/sunkarakamal/GenieBlog
// Live URL: https://sunkarakamal.github.io/GenieBlog/
//
// If you later add a custom domain (e.g. blog.cloudgenie.io):
//   1. Create public/CNAME with one line: blog.cloudgenie.io
//   2. Change site to 'https://blog.cloudgenie.io' and base to '/'
export default defineConfig({
  site: 'https://sunkarakamal.github.io',
  base: '/GenieBlog/',
  output: 'static',
  build: { format: 'directory' },
});
