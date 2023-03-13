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
        field: 'id',
        label: 'ID',
        component: 'Input',
        show: false,
    },
    {
        field: 'info',
        label: "信息",
        component: "Label",
        componentProps: {
            label: '纯信息展示用'
        }
    },
    {
        field: 'name2',
        label: "Info",
        component: "Label",
    },
    {
        field: 'homepage',
        label: "普通输入",
        component: "Input",
        colProps: { span: 24 },
        placeholder: 'URL验证Case',
        rules: [
            {
                required: true,
                validator: VALIDATORS.url,
                trigger: 'change',
            }
        ]
    },
    {
        field: 'num',
        label: '数字输入',
        component: 'InputNumber',
        colProps: { span: 24 },
        componentProps: {
            style: 'width: 100%'  // 自定义长度
        },
        rules: [
            {
                required: true,
                validator: VALIDATORS.notNegative,
                trigger: 'change',
            }
        ]
    },
    {
        field: 'textV',
        label: '长度验证3-5字',
        component: 'Input',
        colProps: { span: 24 },
        rules: [
            {
                required: true,
                validator: VALIDATORS.len(3, 5),
                trigger: 'change',
            }
        ]
    },
    {
        field: 'textV3',
        label: '长度验证==3字',
        component: 'Input',
        colProps: { span: 24 },
        rules: [
            {
                required: true,
                validator: VALIDATORS.len(3, 3),
                trigger: 'change',
            }
        ]
    },
    {
        field: 'description',
        label: "描述信息",
        component: "InputTextArea",
        componentProps: {
            'auto-size': { minRows: 2, maxRows: 5 },
        },
        placeholder: 'Autosize height with minimum and maximum number of lines',
        colProps: { span: 24 },
        rules: [
            {
                required: true,
                validator: VALIDATORS.notBlank,
                trigger: 'change',
            }
        ]
    },
    {
        field: 'name',
        label: "联动示例",
        component: 'Input',
        defaultValue: 'nanta',
        required: true,
        helpMessage: 'User name.',
        placeholder: '当输入#时，地址栏变成必选',
        colProps: { span: 12 },
        componentProps: ({ formActionType }) => {
            return {
                onChange: (value: any) => {
                    const name = value.currentTarget.value;
                    console.log('----value==', name);
                    const { setFieldsValue, getFieldsValue, updateSchema } = formActionType;
                    const ruleValue = [
                        {
                            required: true,
                            validator: async (rule, value) => {
                                if (!value) {
                                    /* eslint-disable-next-line */
                                    return Promise.reject('Address cannot be empty');
                                }
                            }
                        }
                    ];
                    if (name === '#') {
                        updateSchema({
                            field: 'address',
                            rules: ruleValue
                        });
                    } else {
                        updateSchema({
                            field: 'address',
                            required: false,
                            rules: []
                        });
                    }
                }
            }
        }
    },
    {
        field: 'address',
        label: "地址",
        colProps: { span: 12 },
        component: 'InputTextArea',
        placeholder: '自定义组件样式',
        componentProps: {
            style: 'margin-top: 30px;',
        }
    },
    {
        field: 'email',
        label: "Email",
        component: 'Input',
        colProps: { lg: 12, md: 8 },
        rules: [
            {
                required: true,
                // @ts-ignore
                validator: VALIDATORS.email,
                trigger: 'change',
                message: '邮件地址不正确！'
            },
        ],
    },
    {
        field: 'age',
        label: "年龄",
        component: 'InputNumber',
        defaultValue: 1,
        colProps: { span: 12 },
    },
    {
        field: 'type',
        component: 'Select',
        label: 'Type',
        ifHideLabel: true,
        colProps: { span: 12 },
        placeholder: '不显示Label示例',
        componentProps: {
            options: [
                {
                    label: 'Option1',
                    value: 'value_1',
                    key: '1',
                },
                {
                    label: 'Option2',
                    value: 'value_2',
                    key: '2',
                },
            ],
        },
    },
    {
        field: 'nickName',
        label: "Nick Name",
        required: true,
        colProps: { span: 12 },
        component: 'Input',
    },
    {
        field: 'field1',
        component: 'CheckboxGroup',
        label: 'CheckboxGroup_1',
        colProps: { span: 12 },
        defaultValue: ['v2', 'v1'],
        componentProps: {
            options: [
                {
                    label: 'Check_1',
                    value: 'v1',
                },
                {
                    label: 'Check_2',
                    value: 'v2',
                },
                {
                    label: 'Check_3',
                    value: 'v3',
                },
            ],
        },
    },
    {
        field: 'field2',
        component: 'RadioGroup',
        label: 'RadioGroup_2',
        required: true,
        colProps: { span: 12 },
        componentProps: {
            options: [
                {
                    label: 'Check_1',
                    value: 'v1',
                },
                {
                    label: 'Check_2',
                    value: 'v2',
                },
            ],
        },
    },
    {
        field: 'field3',
        component: 'Checkbox',
        label: 'Checkbox_3',
        colProps: { span: 12 },
        renderComponentContent: 'Check',
    },
    {
        field: 'field4',
        component: 'Switch',
        label: 'Switch_4',
        colProps: { span: 12 },
    },
    {
        field: 'field5',
        component: 'RadioButtonGroup',
        label: 'RadioButtonGroup_5',
        defaultValue: 'B',
        colProps: { span: 12 },
        componentProps: {
            options: [
                {
                    label: 'Button_A',
                    value: 'A',
                },
                {
                    label: 'Button_B',
                    value: 'B',
                },
            ],
        },
    },
    {
        field: 'field6',
        component: 'DatePicker',
        colProps: { span: 12 },
        label: '时间件',
    },
    {
        field: 'tags',
        label: "Tags",
        colProps: { span: 12 },
        component: 'Select',
        slot: 'selectB',
        placeholder: 'Please input your tag and then press return.'
    },
    {
        field: 'field7',
        component: 'Select',
        label: '下拉多选',
        slot: 'selectA',
        colProps: { span: 12 },
        //    defaultValue: ['value_1'],
        placeholder: 'Pls select mulit options.',
        componentProps: {
            options: [
                {
                    label: 'Option1',
                    value: 'value_1',
                    key: '1',
                },
                {
                    label: 'Option2',
                    value: 'value_2',
                    key: '2',
                },
                {
                    label: 'Option3',
                    value: 'value_3',
                    key: '3',
                },
            ],
        },
    },
    {
        field: 'apiSelect',
        component: 'ApiSelect',
        label: '懒加载远程下拉',
        required: true,
        componentProps: {
            api: optionsListApi,
            params: {
                id: 1,
            },
            resultField: 'list',
            labelField: 'name',
            valueField: 'value',
            immediate: true, // 是否立即请求后端，还是等待用户下拉选择
            onChange: e => {
                console.log('selected:', e);
            },
            // atfer request callback
            onOptionsChange: options => {
                console.log('get options', options.length, options);
            },
        },
        colProps: {
            span: 8,
        },
        defaultValue: 'jp',
    },
    {
        field: 'field31',
        component: 'Input',
        label: '下拉本地搜索',
        helpMessage: ['ApiSelect组件', '远程数据源本地搜索', '只发起一次请求获取所有选项'],
        required: true,
        slot: 'localSearch',
        colProps: {
            span: 8,
        },
        defaultValue: 'hk',
    },
    {
        field: 'field32',
        component: 'Input',
        label: '下拉远程搜索',
        helpMessage: ['ApiSelect组件', '将关键词发送到接口进行远程搜索'],
        required: true,
        slot: 'remoteSearch',
        colProps: {
            span: 8,
        },
        defaultValue: 'us',
    },
]

