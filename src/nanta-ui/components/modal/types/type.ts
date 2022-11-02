import type { ComputedRef } from 'vue';

export interface ModalMethods {
  setModalProps: (props: Partial<ModalProps>) => void;
  emitVisible?: (visible: boolean, uid: number) => void;
}

export type RegisterFn = (modalMethods: ModalMethods, uuid?: string) => void;

export interface ReturnMethods extends ModalMethods {
  openModal: <T = any>(props?: boolean, data?: T, openOnSet?: boolean) => void;
  closeModal: () => void;
  getVisible?: ComputedRef<boolean>;
}

export type UseModalReturnType = [RegisterFn, ReturnMethods];

export interface ReturnInnerMethods extends ModalMethods {
  closeModal: () => void;
  changeLoading: (loading: boolean) => void;
  changeOkLoading: (loading: boolean) => void;
  getVisible?: ComputedRef<boolean>;
}

export type UseModalInnerReturnType = [RegisterFn, ReturnInnerMethods];

export interface ReturnFormModalMethods extends ModalMethods {
  openModal: <T = any>(props?: boolean, data?: T, openOnSet?: boolean) => void;
  closeModal: () => void;
  changeLoading: (loading: boolean) => void;
  changeOkLoading: (loading: boolean) => void;
  getVisible?: ComputedRef<boolean>;
}

export type RegMethodFn = (modalMethods: ReturnFormModalMethods) => void;

export type UseFormModalReturnType = [RegisterFn, RegMethodFn, ReturnFormModalMethods];

export interface ModalProps {
  visible?: boolean;
  loadingTip?: string;
  showOkBtn: boolean;
  showCancelBtn: boolean;
  loading: boolean;
  closeFunc: () => Promise<any>;

  /**
   * Specify a function that will be called when modal is closed completely.
   * @type Function
   */
  afterClose?: () => any;

  /**
   * Text of the Cancel button
   * @default 'cancel'
   * @type string
   */
  cancelText?: string;

  /**
   * Centered Modal
   * @default false
   * @type boolean
   */
  centered?: boolean;

  /**
   * Whether a close (x) button is visible on top right of the modal dialog or not
   * @default true
   * @type boolean
   */
  closable?: boolean;

  /**
   * Whether to apply loading visual effect for OK button or not
   * @default false
   * @type boolean
   */
  confirmLoading?: boolean;

  /**
   * Return the mount node for Modal
   * @default () => document.body
   * @type Function
   */
  getContainer?: (instance: any) => HTMLElement;

  /**
   * Whether show mask or not.
   * @default true
   * @type boolean
   */
  mask?: boolean;

  /**
   * Whether to close the modal dialog when the mask (area outside the modal) is clicked
   * @default true
   * @type boolean
   */
  maskClosable?: boolean;

  /**
   * Text of the OK button
   * @default 'OK'
   * @type string
   */
  okText?: string;

  /**
   * Button type of the OK button
   * @default 'primary'
   * @type string
   */
  okType?: 'primary' | 'danger' | 'dashed' | 'ghost' | 'default';

  /**
   * Width of the modal dialog
   * @default 520
   * @type string | number
   */
  width?: string | number;

  /**
   * The class name of the container of the modal dialog
   * @type string
   */
  wrapClassName?: string;

  /**
   * The z-index of the Modal
   * @default 1000
   * @type number
   */
  zIndex?: number;
}