import { FormSchema } from '../../form/types/type';
import type { PropType } from 'vue';
import type { Recordable } from '../../..'
import { propTypes } from '../../../utils/propTypes';

export interface ModalInnerRecord {
    record: Recordable;
    title: string;
}

export interface NantaFormModalProps {
    schemas: FormSchema[];
    colon?: boolean;
}

export const nantaFormModalProps = {
    schemas: {
        type: [Array] as PropType<FormSchema[]>,
        default: () => [],
    },
    colon: propTypes.bool.def(true)
}