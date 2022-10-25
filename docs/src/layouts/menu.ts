import { Menu } from './types/type'
// menu datas
const localMenus: Menu[] = [
    {
        name: 'Dashboard',
        icon: 'ic:baseline-home',
        key: 'dashboard',
        path: '/index'
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
                        path: '/components/table/basic',
                        key: 'dddd',
                        icon: 'ic:baseline-chrome-reader-mode',
                    }
                ]
            },
            {
                name: 'Demo',
                path: '/demo',
                key: 'demo',
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
                name: 'Nanta Button',
                path: '/components/nanta/button/index',
                icon: 'quill:creditcard',
                key: 'nantaButton'
            },
            {
                name: 'Nanta Form',
                path: '/components/form/basic',
                icon: 'quill:creditcard',
                key: 'basicForm'
            },
            {
                name: 'Nanta Table',
                path: '/components/table/nantaTable',
                icon: 'quill:creditcard',
                key: 'nantaTable'
            },
            {
                name: 'Nanta Icon',
                path: '/components/icon/index',
                icon: 'quill:creditcard',
                key: 'icon'
            },
            {
                name: 'Basic Table',
                path: '/components/table/basic',
                icon: 'quill:creditcard',
                key: 'basicTable'
            },
        ]
    }
]

export function iteratorMenu(
    item: Menu,
    fn: (item: Menu, keyPath?: string[]) => void,
    keyPath?: string[]
) {
    fn(item, keyPath);
    if (item.children && item.children.length > 0) {
        item.children.forEach((i) => {
            iteratorMenu(i, fn, item.keyPath);
        });
    }
}

export function getMenus() {
    return localMenus;
}

export function getMenuList(rootMenus: Menu[]): Menu[] {
    const menuList = [] as Menu[];
    rootMenus.forEach((item: Menu) => {
        if (!item.children || item.children.length == 0) {
            menuList.push(item)
        } else {
            const childMenuList = getMenuList(item.children);
            childMenuList.forEach((item: Menu) => {
                menuList.push(item);
            })
        }

    })
    return menuList;
}

export function getMenuNode(rootMenus: Menu[]): Menu[] {
    const menuList = [] as Menu[];
    rootMenus.forEach((item: Menu) => {
        if (item.children && item.children.length > 0) {
            menuList.push(item);
            const childMenuList = getMenuNode(item.children);
            childMenuList.forEach((item: Menu) => {
                menuList.push(item);
            })
        }
    })
    return menuList;
}