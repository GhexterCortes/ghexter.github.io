import * as path from 'path';
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
    root: path.join(__dirname),
    build: {
        outDir: path.join(__dirname, 'dist'),
        minify: true
    },
    plugins: [svelte()]
})
