import type { AppRouteRecordRaw, AppRouteModule } from '../types';

const modules = import.meta.globEager('./modules/**/*.ts');
const routeModuleList: AppRouteModule[] = [];

export const LAYOUT = () => import('../../layouts/default.vue');
export const PARENT_LAYOUT_NAME = 'ParentLayout';
export const PAGE_NOT_FOUND_NAME = 'PageNotFound';
export const BASE_HOME = '/';
export const EXCEPTION_COMPONENT = () => import('../../pages/Exception.vue');

export const PAGE_NOT_FOUND_ROUTE: AppRouteRecordRaw = {
    path: '/:path(.*)*',
    name: PAGE_NOT_FOUND_NAME,
    component: LAYOUT,
    meta: {
      title: 'ErrorPage',
      hideBreadcrumb: true,
      hideMenu: true,
    },
    children: [
      {
        path: '/:path(.*)*',
        name: PAGE_NOT_FOUND_NAME,
        component: EXCEPTION_COMPONENT,
        meta: {
          title: 'ErrorPage',
          hideBreadcrumb: true,
          hideMenu: true,
        },
      },
    ],
  };

// 加入到路由集合中
Object.keys(modules).forEach(key => {
  /*@ts-ignore*/
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

export const asyncRoutes = [PAGE_NOT_FOUND_ROUTE, ...routeModuleList];

export const RootRoute: AppRouteRecordRaw = {
    path: '/',
    name: 'Root',
    redirect: BASE_HOME,
    meta: {
      title: 'Root',
    },
  };

export const basicRoutes = [RootRoute, PAGE_NOT_FOUND_ROUTE];