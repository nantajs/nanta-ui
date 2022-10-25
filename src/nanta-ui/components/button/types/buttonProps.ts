import type { PropType } from 'vue';

export const buttonProps = {
    color: { type: String, validator: (v: string) => ['error', 'warning', 'success', ''].includes(v) },
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
    /**
     * preIcon and postIcon icon size.
     * @default: 14
     */
    iconSize: { type: Number, default: 14 },
    onClick: { type: Function as PropType<(...args: any) => any>, default: null },
};
