import {createApp, h} from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import { createPinia } from "pinia";
import { Tooltip } from "bootstrap";
import App from "../metronic8/src/App.vue";
import ApiService from "@/core/services/ApiService.ts";
import {initApexCharts} from "@/core/plugins/apexcharts.ts";
import {initInlineSvg} from "@/core/plugins/inline-svg.ts";
import {initKtIcon} from "@/core/plugins/keenthemes.ts";
import {initVeeValidate} from "@/core/plugins/vee-validate.ts";
import ElementPlus from "element-plus";
import i18n from "@/core/plugins/i18n.ts";
import "@/core/plugins/prismjs";


let app
let themeMode = "system";

if (localStorage.getItem("kt_theme_mode_value")) {
    themeMode = localStorage.getItem("kt_theme_mode_value");
}

if (themeMode === "system") {
    themeMode = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}


createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('../metronic8/src/**/*.vue', { eager: true })
        let page = pages[`../metronic8/src/${name}.vue`]
        page.default.layout = page.default.layout || App
        return page
    },
    setup({ el, App, props, plugin }) {
        app = createApp({ render: () => h(App, props) })
            app.use(createPinia())
            app.use(plugin)
            app.use(ElementPlus)
            ApiService.init(app);
            initApexCharts(app);
            initInlineSvg(app);
            initKtIcon(app);
            initVeeValidate();
            app.use(i18n);
            app.directive("tooltip", (el) => {
                new Tooltip(el);
            });
            app.mount('#app')


    },
}).then(app => {

    document.getElementById("vite-app").setAttribute("data-bs-theme", themeMode);
})

