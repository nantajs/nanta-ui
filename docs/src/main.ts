import { createApp } from 'vue'
import '/@/design/index.less';
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import { setupRouter } from './router';
import { NantaSetupOption, setupNanta } from '@nanta/ui';
import '@nanta/ui/dist/style.css';

const app = createApp(App);
setupRouter(app);

// setupNanta(app, {locale: 'zh-CN'} as NantaSetupOption);
setupNanta(app,  {locale: 'en'} as NantaSetupOption);
app.use(Antd).mount('#app')
