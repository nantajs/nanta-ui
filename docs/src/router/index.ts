import type { RouteRecordRaw } from 'vue-router';
import type { App } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { basicRoutes } from './routers';
import { basicRouteItems } from "./routes"


// console.log(basicRoutes)
// app router
export const router = createRouter({
    history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
    routes: basicRoutes as unknown as RouteRecordRaw[],
    strict: true,
    scrollBehavior: () => ({ left: 0, top: 0 }),
});

const allRoutes = createRouter({
    history: createWebHashHistory(),
    routes: basicRouteItems,
})

// config router
export function setupRouter(app: App<Element>) {
    app.use(allRoutes as any);
}
