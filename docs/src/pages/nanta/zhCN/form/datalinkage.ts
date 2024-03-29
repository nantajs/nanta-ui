import { FormSchema, VALIDATORS } from "/~/main";
import { crud } from "/@/utils/http/crud"

const { api } = crud({ url: '/api/mock/options', 'method': 'get' })
export const optionsListApi = (params: any): Promise<any> => {
    return new Promise((resolve, reject) => {
        api(params).then((response: any) => {
            resolve(response.data);
        }).catch((error) => {
            console.error(error);
            reject(error)
        });
    });
}

export interface selectParams {
    id: number | string;
}

export const schemes: FormSchema[] = [
    {
        field: 'reviewResult',
        component: 'RadioGroup',
        label: '出差审核',
        colProps: { span: 20 },
        required: true,
        componentProps: ({ formActionType }) => {
            return {
                options: [
                    {
                        label: '通过',
                        value: '5',
                    },
                    {
                        label: '不通过',
                        value: '3',
                    },
                ],
                onblur: (value: any) => {
                    console.log('onblur', value);
                },
                onChange: (value: any) => {
                    const val = value.target.value;
                    console.log('----curentval', val);
                    const { updateSchema, clearValidate, resetSchema } = formActionType;

                    if (val === '3') { // 审核不通过   
                        console.log('不通过！', val)
                        updateSchema({
                            field: "area",
                            component: 'CheckboxGroup',
                            rules: [
                                {
                                    required: false,
                                }]
                        })
                        // 防止上次的validator显示
                        clearValidate('area')
                    } else {
                        // 审核通过
                        console.log('通过！', val)
                        updateSchema({
                            field: "area",
                            component: 'CheckboxGroup',
                            rules: [
                                {
                                    required: true,
                                    validator: async (rule, value) => {
                                        if (!value || value.length === 0) {
                                            console.log('----curentval￥￥￥ ', val);
                                            return Promise.reject('请选择出差国家！');
                                        }
                                    }
                                }
                            ]
                        })
                    }
                },
            };
        },
        rules: [
            {
                required: true,
                // @ts-ignore
                validator: async (rule, value) => {
                    if (!value) {
                        return Promise.reject('请选择审核结论');
                    }
                    return Promise.resolve();
                },
                trigger: 'change',
            },
        ],
    },
    {
        field: 'area',
        label: '出差国家（可多选）',
        component: 'CheckboxGroup',
        defaultValue: [],
        componentProps: {
            options: [
                {
                    label: '日本',
                    value: '1',
                },
                {
                    label: '美国',
                    value: '2',
                },
            ],
        },
    },
]

