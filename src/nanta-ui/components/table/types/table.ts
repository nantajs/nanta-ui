import type { ColumnProps } from 'ant-design-vue/lib/table';
import type { Recordable } from '../../..'

export type CellFormat = string | ((text: string, record: Recordable, index: number) => string | number) | Map<string | number, any>;

export interface BasicColumn extends ColumnProps<Recordable> {
    format?: CellFormat;
}