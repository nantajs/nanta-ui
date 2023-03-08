import { EXCEPTION_COMPONENT, PAGE_NOT_FOUND_NAME, E404_COMPONENT } from '/@/router/constant';

export const basicRouteItems = [
    { path: '/', name: 'Home', component: () => import('/@/pages/index.vue') },    
    
    { path: '/components/button/index', name: 'Button', group: 'components', component: () => import('/@/pages/nanta/en/button/button.vue') },
    { path: '/components/form/index', name: 'Form', group: 'components', component: () => import('/@/pages/nanta/en/form/basic.vue') },
    { path: '/components/form/index-cn', name: '基础表单', group: 'components', component: () => import('/@/pages/nanta/zhCN/form/basic.vue') },
    { path: '/components/icon/index', name: 'Icon', group: 'components', component: () => import('/@/pages/nanta/en/icon/icon.vue') },
    { path: '/components/modal/index', name: 'Modal', group: 'components', component: () => import('/@/pages/nanta/en/modal/index.vue') },
    { path: '/components/table/index', name: 'Table', group: 'components', component: () => import('/@/pages/nanta/en/table/index.vue') },
    { path: '/components/table/index-cn', name: '表格', group: 'components', component: () => import('/@/pages/nanta/zhCN/table/index.vue') },
    { path: '/components/table/sTable', name: 'STable', group: 'components', hide: true, component: () => import('/@/pages/nanta/en/table/sTable.vue') },

    { path: '/antv/table/index', name: 'Table2', group: 'antv', component: () => import('/@/pages/table/basic.vue') },

    { path: '/datepicker', name: 'DatePicker', component: () => import('/@/pages/datepicker.vue') },
    { path: '/demo', name: 'Demo', component: () => import('/@/pages/demo.vue') },
    { path: '/index', name: 'Index', component: () => import('/@/pages/index.vue') },
    { path: '/404', name: '404Page', component: E404_COMPONENT },
    { path: '/:path(.*)*', name: PAGE_NOT_FOUND_NAME, component: EXCEPTION_COMPONENT, }
]