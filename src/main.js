//import Vue from "vue";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

var VueCookie = require("vue-cookies");
// Vue.use(VueCookie);
//VueCookie.set("S3ID", getS3ID, { expires: "3h" });
createApp(App).use(VueCookie).use(store).use(router).mount("#app");
// new Vue({
//   router,
//   store,
//   render: (h) => h(App),
// }).$mount("#app");
