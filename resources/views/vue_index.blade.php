
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <title>Inertia | Laravel</title>
    @vite('resources/js/app.js')
    @inertiaHead
</head>
<body>
<script>
    import './bootstrap';
    import { createSSRApp, h } from 'vue'
    import { createInertiaApp } from '@inertiajs/vue3'

    createInertiaApp({

        resolve: name => {
            const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
            return pages[`./Pages/VueApp.vue`]
        },
        setup({ el, App, props, plugin }) {
            createSSRApp({ render: () => h(App, props) })
                .use(plugin)
                .mount(el)
        },
        id: "VueApp",
    })

</script>
@inertia

</body>
</html>
