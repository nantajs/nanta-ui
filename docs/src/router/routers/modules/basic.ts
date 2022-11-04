import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const dashboard: AppRouteModule = {
  path: '/basic',
  name: 'Dashboard',
  component: LAYOUT,
  redirect: '/basic/index',
  meta: {
    orderNo: 1,
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

const comp: AppRouteModule = {
  path: '/components/form',
  name: 'Components',
  component: LAYOUT,
  redirect: '/componetns/form/basic',
  meta: {
    orderNo: 12,
    icon: 'ion:grid-outline',
    title: '表单页面',
  },
  children: [
    {
      path: 'basic',
      name: 'Basic',
      component: () => import('/@/pages/components/nanta/form/basic.vue'),
      meta: {
        // affix: true,
        title: "基础表单",
      },
    }
  ]
}

export default [dashboard, comp];
