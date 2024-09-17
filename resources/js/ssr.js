import {createSSRApp, h} from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import "@/core/plugins/prismjs";
import createServer from '@inertiajs/vue3/server'
import { renderToString } from '@vue/server-renderer'


let themeMode = "system";



createServer(page =>
    createInertiaApp({
        page,
        render: renderToString,
        resolve: name => {
            const pages = import.meta.glob('../metronic8/src/**/*.vue', { eager: true })
            return pages[`../metronic8/src/${name}.vue`]

        },
        setup({ App, props, plugin }) {
            return createSSRApp({
                render: () => h(App, props),

            }).use(plugin)
        },
    }),
)

//document.documentElement.setAttribute("data-bs-theme", themeMode);
// createServer(page =>
// createInertiaApp({
//     page,
//     render: renderToString,
//     resolve: name => {
//         const pages = import.meta.glob('../metronic8/src/**/*.vue', { eager: true })
//         let page = pages[`../metronic8/src/${name}.vue`]
//         page.default.layout = page.default.layout || App
//         return page
//     },
//     setup({ el, App, props, plugin }) {
//         app = createSSRApp({ render: () => h(App, props) })
//         app.use(plugin)
//
//         return app
//
//
//     },
// }));

