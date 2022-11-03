import { createApp } from 'vue'
import '/@/design/index.less';
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import { setupRouter } from './router';
import { setupNanta } from '/~/main'

const app = createApp(App);
setupRouter(app);
// @ts-ignore
setupNanta(app);
app.use(Antd).mount('#app')
