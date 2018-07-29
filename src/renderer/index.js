import Vue from "vue";
import VueElectron from "vue-electron";
import axios from "axios";
import App from "./App";
import router from "./router";
import store from "./store";
import PouchDB from "pouchdb";
import Vuetify from "vuetify";

import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";

const db = new PouchDB("eldb");

if (!process.env.IS_WEB) Vue.use(VueElectron);
Vue.use(Vuetify);

Vue.http = Vue.prototype.$http = axios;
Vue.db = Vue.prototype.$db = db;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: "<App/>"
}).$mount("#app");
