import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import { setupRouter, initRoutes } from './router';

const app = createApp(App);
await initRoutes();
setupRouter(app);
app.use(Antd).mount('#app')
