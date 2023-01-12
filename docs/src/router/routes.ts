import { EXCEPTION_COMPONENT, PAGE_NOT_FOUND_NAME, E404_COMPONENT } from '/@/router/constant';

export const basicRouteItems = [
    { path: '/', name: 'Home', component: () => import('/@/pages/index.vue') },    
    
    { path: '/components/button/index', name: 'Button', group: 'components', component: () => import('/@/pages/components/nanta/button/button.vue') },
    { path: '/components/form/index', name: 'Form', group: 'components', component: () => import('/@/pages/components/nanta/form/basic.vue') },
    { path: '/components/icon/index', name: 'Icon', group: 'components', component: () => import('/@/pages/components/nanta/icon/icon.vue') },
    { path: '/components/modal/index', name: 'Modal', group: 'components', component: () => import('/@/pages/components/nanta/modal/index.vue') },
    { path: '/components/table/index', name: 'Table', group: 'components', component: () => import('/@/pages/components/nanta/table/index.vue') },
    { path: '/components/table/sTable', name: 'STable', group: 'components', component: () => import('/@/pages/components/nanta/table/sTable.vue') },

    { path: '/antv/table/index', name: 'Table2', group: 'antv', component: () => import('/@/pages/components/table/basic.vue') },

    { path: '/demo', name: 'Demo', component: () => import('/@/pages/demo.vue') },
    { path: '/index', name: 'Index', component: () => import('/@/pages/index.vue') },
    { path: '/404', name: '404Page', component: E404_COMPONENT },
    { path: '/:path(.*)*', name: PAGE_NOT_FOUND_NAME, component: EXCEPTION_COMPONENT, }
]