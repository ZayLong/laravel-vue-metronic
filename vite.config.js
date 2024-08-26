import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import {fileURLToPath, URL} from "node:url";
import commonjs from "vite-plugin-commonjs";
export default defineConfig({
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./resources/metronic8/src", import.meta.url)),
        },
    },
    ssr: {
        noExternal: ['@popperjs/core','bootstrap','element-plus','vee-validate','pinia','vue-shadow-dom','vue','vue-axios','quill','vue3-apexcharts','quill-mention','quill-emoji','quill-image-resize-'],
    },
    build: {
        sourcemap: true,
    },
    plugins: [
        vue({
            template: {
                transformAssetUrls: {
                    // The Vue plugin will re-writesx asset URLs, when referenced
                    // in Single File Components, to point to the Laravel web
                    // server. Setting this to `null` allows the Laravel plugin
                    // to instead re-write asset URLs to point to the Vite
                    // server instead.
                    base: null,

                    // The Vue plugin will parse absolute URLs and treat them
                    // as absolute paths to files on disk. Setting this to
                    // `false` will leave absolute URLs un-touched so they can
                    // reference assets in the public directory as expected.
                    includeAbsolute: false,
                },
            },
        }),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
            ssr: 'resources/js/ssr.js',
        }),
    ],
});
