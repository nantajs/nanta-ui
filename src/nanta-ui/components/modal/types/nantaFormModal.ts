import { FormSchema } from '../../form/types/type';
import type { PropType } from 'vue';
import type { Recordable } from '../../..'

export interface ModalInnerRecord {
    record: Recordable;
    title: string;
}

export const nantaFormModalProps = {
    schemas: {
        type: [Array] as PropType<FormSchema[]>,
        default: () => [],
    },
}