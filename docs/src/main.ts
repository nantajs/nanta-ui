import { createApp } from 'vue'
import '/@/design/index.less';
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import { setupRouter } from './router';
import { setupNanta } from '/~/main';
import '@nanta/ui/dist/style.css';

const app = createApp(App);
setupRouter(app);
// @ts-ignore
// setupNanta(app, {locale: 'zh-CN'});
setupNanta(app);
app.use(Antd).mount('#app')
