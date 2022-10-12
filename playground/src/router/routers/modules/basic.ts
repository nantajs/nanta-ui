import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const dashboard: AppRouteModule = {
  path: '/basic',
  name: 'Dashboard',
  component: LAYOUT,
  redirect: '/basic/analysis',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: '基础页面',
  },
  children: [
    {
      path: 'index',
      name: 'Index',
      component: () => import('/@/pages/index.vue'),
      meta: {
        // affix: true,
        title: "首页",
      },
    },
    {
      path: 'demo',
      name: 'Demo',
      component: () => import('/@/pages/demo.vue'),
      meta: {
        // affix: true,
        title: "示例",
      },
    },
  ],
};

export default dashboard;
