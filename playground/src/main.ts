import { createApp } from 'vue'
import '/@/design/index.less';
import './style.css'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import { setupRouter } from './router';

const app = createApp(App);
console.log('before')
setupRouter(app);
console.log('after')
app.use(Antd);
app.mount('#app')
