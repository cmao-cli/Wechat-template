import Vue from 'vue';
import App from './App.vue';

(App as any).mpType = 'app';

Vue.config.productionTip = false;

const app = new Vue({
  // 可以放store
  ...App,
});

app.$mount();
