import type { ExtractPropTypes } from 'vue';
import { buttonProps } from './types/buttonProps';

export declare type ButtonProps = Partial<ExtractPropTypes<typeof buttonProps>>;
export type ButtonOptions = Partial<ButtonProps> & { text?: string };