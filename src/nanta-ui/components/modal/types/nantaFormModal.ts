import { FormSchema } from '../../form/types/type';
import type { PropType } from 'vue';
import type { Recordable } from '../../..'
import { propTypes } from '../../../utils/propTypes';
import type { ModalProps } from "./type"

export interface ModalInnerRecord {
    record: Recordable;
    title: string;
}

type PartModelProps = Partial<ModalProps>

export interface NantaFormModalProps {
    schemas: FormSchema[];
    colon?: boolean;
    modalProps?: PartModelProps;
    isLoading?: boolean;
}

export const nantaFormModalProps = {
    schemas: {
        type: [Array] as PropType<FormSchema[]>,
        default: () => [],
    },
    colon: propTypes.bool.def(true),
    modalProps: Object as PropType<PartModelProps>,
    isLoading: propTypes.bool.def(false),
}