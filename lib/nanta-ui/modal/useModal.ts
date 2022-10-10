import type {
  ModalProps,
  UseModalReturnType,
  ModalMethods,
  ReturnMethods,
  UseModalInnerReturnType,
  RegisterFn
} from "./type";
import type { Nullable, Fn } from '../types/global'
import { isFunction, isEqual } from 'lodash-es'
import { ref, unref, reactive, getCurrentInstance, computed, toRaw, watchEffect, nextTick } from 'vue'

const dataTransfer = reactive<any>({});
const visibleData = reactive<{ [key: number]: boolean }>({});

export function useModal(): UseModalReturnType {
  const modal = ref<Nullable<ModalMethods>>(null);
  const loaded = ref<Nullable<boolean>>(false);
  const uid = ref<string>("");

  function register(modalMethod: ModalMethods, uuid?: string) {
    if (!getCurrentInstance()) {
      throw new Error(
        "useModal() can only be used inside setup() or functional components!"
      );
    }
    uid.value = uuid || 'unknown';

    modal.value = modalMethod;
    loaded.value = true;
    modalMethod.emitVisible = (visible: boolean, uid: number) => {
      visibleData[uid] = visible;
    };
  }

  const getInstance = () => {
    const instance = unref(modal);
    if (!instance) {
      console.error("useModal instance is undefined!");
    }
    return instance;
  };

  const methods: ReturnMethods = {
    setModalProps: (props: Partial<ModalProps>): void => {
      getInstance()?.setModalProps(props);
    },

    getVisible: computed((): boolean => {
      return visibleData[~~unref(uid)];
    }),

    openModal: <T = any>(visible = true, data?: T, openOnSet = true): void => {
      getInstance()?.setModalProps({
        visible: visible,
      });

      if (!data) return;
      const id = unref(uid);
      if (openOnSet) {
        dataTransfer[id] = null;
        dataTransfer[id] = toRaw(data);
        return;
      }
      const equal = isEqual(toRaw(dataTransfer[id]), toRaw(data));
      if (!equal) {
        dataTransfer[id] = toRaw(data);
      }
    },

    closeModal: () => {
      getInstance()?.setModalProps({ visible: false });
    },
  };
  return [register, methods];
}

export const useModalInner = (callbackFn?: Fn): UseModalInnerReturnType => {
  const modalInstanceRef = ref<Nullable<ModalMethods>>(null);
  const currentInstance = getCurrentInstance();
  const uidRef = ref<string>('');

  const getInstance = () => {
    const instance = unref(modalInstanceRef);
    if (!instance) {
      console.error('useModalInner instance is undefined!');
    }
    return instance;
  };

  const register: RegisterFn = (modalInstance: ModalMethods, uuid?: string) => {
    uidRef.value = uuid || 'unknown';
    modalInstanceRef.value = modalInstance;
    currentInstance?.emit('register', modalInstance, uuid);
  };

  watchEffect(() => {
    const data = dataTransfer[unref(uidRef)];
    if (!data) return;
    if (!callbackFn || !isFunction(callbackFn)) return;
    nextTick(() => {
      callbackFn(data);
    });
  });

  return [
    register,
    {
      changeLoading: (loading = true) => {
        getInstance()?.setModalProps({ loading });
      },
      getVisible: computed((): boolean => {
        return visibleData[~~unref(uidRef)];
      }),

      changeOkLoading: (loading = true) => {
        getInstance()?.setModalProps({ confirmLoading: loading });
      },

      closeModal: () => {
        getInstance()?.setModalProps({ visible: false });
      },

      setModalProps: (props: Partial<ModalProps>) => {
        getInstance()?.setModalProps(props);
      },
    },
  ];
};
