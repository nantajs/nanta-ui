import { createApp } from 'vue'
import '/@/design/index.less';
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import { setupRouter } from './router';
import { setupNanta } from '@nanta/ui';
import '@nanta/ui/dist/style.css';
import { NantaOption } from "@nanta/ui/dist/nanta-ui/setup";

const app = createApp(App);
setupRouter(app);
// setupNanta(app, {locale: 'zh-CN'} as NantaOption);
setupNanta(app,  {locale: 'en'} as NantaOption);
app.use(Antd).mount('#app')
