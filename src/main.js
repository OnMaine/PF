import './assets/styles/main.scss';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import VueApexCharts from 'vue3-apexcharts';
import Countdown from 'vue3-flip-countdown'
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(VueApexCharts);
app.use(Countdown);
app.use(router);

app.mount('#app');
