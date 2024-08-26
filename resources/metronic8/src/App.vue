<template>

    <div id="vite-app">



        <CustomersListing/>



    </div>

</template>

<script lang="ts">
import { defineComponent, nextTick, onBeforeMount, onMounted } from "vue";

//import { RouterView } from "vue-router";
//import Dashboard from "@/views/Dashboard.vue";
import CustomersListing from "@/views/apps/customers/CustomersListing.vue";
import { useConfigStore } from "@/stores/config";
import { useThemeStore } from "@/stores/theme";
import { useBodyStore } from "@/stores/body";
import { themeConfigValue } from "@/layouts/default-layout/config/helper";
import { initializeComponents } from "@/core/plugins/keenthemes";

export default defineComponent({
  name: "app",
  components: {
      ShadowRoot,
      CustomersListing,
  },
  setup() {
    // const configStore = useConfigStore();
    // const themeStore = useThemeStore();
    // const bodyStore = useBodyStore();

    onBeforeMount(() => {
      /**
       * Overrides the layout config using saved data from localStorage
       * remove this to use static config (@/layouts/default-layout/config/DefaultLayoutConfig.ts)
       */
      //configStore.overrideLayoutConfig();

      /**
       *  Sets a mode from configuration
       */
      //themeStore.setThemeMode(themeConfigValue.value);
    });

    onMounted(() => {
      nextTick(() => {
        initializeComponents();

        //bodyStore.removeBodyClassName("page-loading");
      });
    });
  },
});
</script>


<style lang="scss">


    @import "bootstrap-icons/font/bootstrap-icons";
    @import "apexcharts/dist/apexcharts";
    @import "quill/dist/quill.snow";
    @import "node_modules/animate.css/animate";
    @import "sweetalert2/dist/sweetalert2";
    @import "nouislider/dist/nouislider";
    @import "@fortawesome/fontawesome-free/css/all.min";
    @import "socicon/css/socicon";
    @import "line-awesome/dist/line-awesome/css/line-awesome";
    @import "dropzone/dist/dropzone";
    @import "@vueform/multiselect/themes/default";
    @import "prism-themes/themes/prism-shades-of-purple";
    @import "element-plus/dist/index";

    @import "assets/keenicons/duotone/style?inline";
    @import "assets/keenicons/outline/style?inline";
    @import "assets/keenicons/solid/style?inline";
    @import "assets/sass/element-ui.dark?inline";
    @import "assets/sass/plugins?inline";
    @import "assets/sass/style?inline";



//    @import "bootstrap-icons/font/bootstrap-icons.css";
//    @import "apexcharts/dist/apexcharts.css";
//    @import "quill/dist/quill.snow.css";
//    @import "animate.css";
//    @import "sweetalert2/dist/sweetalert2.css";
//    @import "nouislider/dist/nouislider.css";
//    @import "@fortawesome/fontawesome-free/css/all.min.css";
//    @import "socicon/css/socicon.css";
//    @import "line-awesome/dist/line-awesome/css/line-awesome.css";
//    @import "dropzone/dist/dropzone.css";
//    @import "@vueform/multiselect/themes/default.css";
//    @import "prism-themes/themes/prism-shades-of-purple.css";
//    @import "element-plus/dist/index.css";
//
//     //Main demo style scss
//    @import "assets/keenicons/duotone/style.css";
//    @import "assets/keenicons/outline/style.css";
//    @import "assets/keenicons/solid/style.css";
//    @import "assets/sass/element-ui.dark";
//    @import "assets/sass/plugins";
//    @import "assets/sass/style";

#vite-app {
    display: contents;
}
</style>

