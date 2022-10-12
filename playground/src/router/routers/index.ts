import type { AppRouteRecordRaw, AppRouteModule } from '../types';

const modules = import.meta.globEager('./modules/**/*.ts');
const routeModuleList: AppRouteModule[] = [];
import { LAYOUT, PARENT_LAYOUT_NAME, PAGE_NOT_FOUND_NAME, BASE_HOME, EXCEPTION_COMPONENT } from '/@/router/constant';

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
  const mod = modules[key].default || {};
  console.log('key', key, modules[key])
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

console.log(routeModuleList)
export const asyncRoutes = [...routeModuleList];

export const RootRoute: AppRouteRecordRaw = {
    path: '/',
    name: 'Root',
    redirect: BASE_HOME,
    meta: {
      title: 'Root',
    },
  };

export const basicRoutes = [...asyncRoutes, PAGE_NOT_FOUND_ROUTE];