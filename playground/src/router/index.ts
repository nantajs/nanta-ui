import type { RouteRecordRaw } from 'vue-router';
import type { App } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { asyncRoutes, basicRoutes } from './routers';

// app router
export const router = createRouter({
    history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
    routes: basicRoutes as unknown as RouteRecordRaw[],
    strict: true,
    scrollBehavior: () => ({ left: 0, top: 0 }),
});

// config router
export function setupRouter(app: App<Element>) {
    app.use(router);
}

export async function initRoutes() {
    try {
        return asyncRoutes;
    } catch (err) {
        console.error(err);
    }
}