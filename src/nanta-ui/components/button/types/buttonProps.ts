import type { PropType, ExtractPropTypes } from 'vue';
import type { ButtonType } from './button'

export declare type ButtonProps = Partial<ExtractPropTypes<typeof buttonProps>>;

export const buttonProps = {
    // color: { type: String, validator: (v: string) => ['error', 'warning', 'success', ''].includes(v) },
    color: { type: String },
    loading: { type: Boolean },
    disabled: { type: Boolean },
    /**
     * Text before icon.
     */
    preIcon: { type: String },
    /**
     * Text after icon.
     */
    postIcon: { type: String },
    icon: { type: String },
    type: { type: String as PropType<ButtonType>},
    /**
     * preIcon and postIcon icon size.
     * @default: 14
     */
    iconSize: { type: Number, default: 14 },
    onClick: { type: Function as PropType<(...args: any) => any>, default: null },
};
