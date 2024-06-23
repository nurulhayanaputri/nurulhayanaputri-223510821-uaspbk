import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; 

const app = createApp(App);

app.config.globalProperties.$successMessage = function (message) {
  alert(message);
};

app.use(router);
app.mount('#app');
