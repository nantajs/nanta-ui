import type { RouteRecordRaw } from 'vue-router';
import type { App } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { basicRoutes } from './routers';
import { EXCEPTION_COMPONENT, PAGE_NOT_FOUND_NAME } from '/@/router/constant';

// console.log(basicRoutes)
// app router
export const router = createRouter({
    history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
    routes: basicRoutes as unknown as RouteRecordRaw[],
    strict: true,
    scrollBehavior: () => ({ left: 0, top: 0 }),
});

const routes2 = [
    { path: '/components/nanta/button/index', name: 'NantaButton', component: () => import('/@/pages/components/nanta/button/button.vue') },
    { path: '/components/form/basic', name: 'BasicForm', component: () => import('/@/pages/components/form/basic.vue') },
    { path: '/components/table/basic', name: 'BasicTable', component: () => import('/@/pages/components/table/basic.vue') },
    { path: '/components/table/nantaTable', name: 'NantaTable', component: () => import('/@/pages/components/nanta/table/index.vue') },
    { path: '/components/icon/index', name: 'Icon', component: () => import('/@/pages/components/nanta/icon/icon.vue') },
    { path: '/demo', name: 'Demo', component: ()=> import('/@/pages/demo.vue')},
    { path: '/', name: 'Index', component: ()=> import('/@/pages/index.vue')},
    { path: '/index', name: 'Index', component: ()=> import('/@/pages/index.vue')},
    { path: '/404', name: '404Page', component: EXCEPTION_COMPONENT },
    { path: '/:path(.*)*', name: PAGE_NOT_FOUND_NAME, component: EXCEPTION_COMPONENT, }
]

const router2 = createRouter({
    history: createWebHashHistory(),
    routes: routes2
})

// config router
export function setupRouter(app: App<Element>) {
    app.use(router2 as any);
}
