import type { ColumnProps } from 'ant-design-vue/lib/table';
import type { Recordable, VueNode } from '../../..';

export type CellFormat = string | ((text: string, record: Recordable, index: number) => string | number) | Map<string | number, any>;

export interface BasicColumn extends ColumnProps<Recordable> {
    customTitle?: VueNode;
    edit?: boolean;
    editRow?: boolean;
    flag?: 'INDEX' | 'DEFAULT' | 'CHECKBOX' | 'RADIO' | 'ACTION';
    format?: CellFormat;
    // whether hiddle current column.
    hidden?: boolean;
    slots?: Recordable;
}