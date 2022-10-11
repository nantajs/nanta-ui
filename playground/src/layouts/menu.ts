import { Menu } from './types/type'
// mock data
const localMenus: Menu[] = [
    {
        name: 'Dashboard',
        icon: 'ic:baseline-home',
        key: 'dashboard',
        path: '/'
    },
    {
        name: 'Pages',
        icon: 'ic:baseline-dashboard-customize',
        key: 'sys-setting',
        path: '',
        children: [
            {
                name: 'Menu Level 2',
                path: '/demo',
                key: '1',
                icon: 'ic:twotone-cable',
                children: [
                    {
                        name: 'Demo Page',
                        path: '/demo',
                        key: 'dddd',
                        icon: 'ic:baseline-chrome-reader-mode',
                    }
                ]
            },
            {
                name: 'Icon Search',
                path: '/tool/icon',
                key: 'tool',
                icon: 'ic:twotone-local-dining',
            },
        ]
    },
    {
        name: 'Components',
        icon: 'ic:outline-featured-video',
        key: 's',
        path: '/components/table',
        children: [           
            {
                name: 'Basic Form',
                path: '/components/form/basic',
                icon: 'quill:creditcard',
                key: 'basicForm'
            }
        ]
    }
]

export async function getAsyncMenus() {
    return localMenus;
}