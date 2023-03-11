import { MockMethod } from "vite-plugin-mock";

const list = [
    {
        name: '中国',
        value: 'cn'
    },
    {
        name: '日本',
        value: 'jp'
    },
    {
        name: '英国',
        value: 'hk'
    },
    {
        name: '美国',
        value: 'us'
    },
]

function filter(item: any, keyword: string) {
    if (!keyword || keyword.trim().length === 0) {
        return true;
    }
    return item.name.includes(keyword)
}

export default [
    {
        url: "/api/mock/options",
        method: "get",
        response: ({ query }) => {
            console.error(query)
            return {
                page: 1,
                total: 50,
                list: list.filter(i=>filter(i, query.keyword)),
            };
        },
    },
] as MockMethod[];
