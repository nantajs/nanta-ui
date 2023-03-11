import { Method } from 'axios';
import request from './request';

export const fetchSetting = {
    pageField: 'page',
    sizeField: 'pageSize',
    listField: 'result',
    totalField: 'total',
};

export interface options {
    url: string;
    method?: Method;
}

export function crud(opt: options) {
    return {
        list: (params: any) => {
            return request({
                url: opt.url,
                method: 'get',
                params: params
            });
        },
        add: (data: any) => {
            return request({
                url: opt.url,
                method: 'post',
                data: data
            });
        },
        update: (data: any) => {
            return request({
                url: opt.url,
                method: 'put',
                data: data
            });
        },
        del: (data: any) => {
            return request({
                url: opt.url,
                method: 'delete',
                data: data
            });
        },
        api: (params: any) => {
            return (!opt.method || opt.method === 'get') ?
                request({
                    url: opt.url,
                    method: opt.method ? opt.method : 'get',
                    params: params
                }) :
                request({
                    url: opt.url,
                    method: opt.method,
                    data: params
                })
        },
    }
}