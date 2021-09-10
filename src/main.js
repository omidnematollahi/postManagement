import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueLazyload from 'vue-lazyload';
import Toast from 'vue-toastification';
// Import the CSS or use your own!
import 'vue-toastification/dist/index.css';

Vue.config.productionTip = false;
const loadimage = require('./assets/images/loading.gif');
const errorimage = require('./assets/images/404.gif');
Vue.use(VueLazyload, {
  preLoad: 2,
  error: errorimage,
  loading: loadimage,
  attempt: 1,
});
const options = {
  position: 'top-right',
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  closeButton: 'button',
  icon: true,
};
Vue.use(Toast, options);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
