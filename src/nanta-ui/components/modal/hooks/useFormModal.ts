import type {
    UseFormModalReturnType,
    ReturnFormModalMethods,
    ReturnInnerMethods,
    RegMethodFn
} from '../types/type'
import { useModal } from "./useModal"
import type { Nullable, Fn } from '../../..'
import { ref, unref, reactive, getCurrentInstance, computed, toRaw, watchEffect, nextTick } from 'vue'

export function useFormModal(): UseFormModalReturnType {
    const [register, modelReturnType] = useModal();
    const modal = ref<Nullable<ReturnInnerMethods>>();

    const regMethodFn: RegMethodFn = (modalMethods: ReturnInnerMethods) => {
        if (!getCurrentInstance()) {
            throw new Error(
                "useFormModal() can only be used inside setup() or functional components!"
            );
        }
        modal.value = modalMethods;
    }

    const getInstance = () => {
        const instance = unref(modal);
        if (!instance) {
            console.error("useFormModal instance is undefined!");
        }
        return instance;
    };

    return [
        register,
        regMethodFn,
        {
            ...modelReturnType,
            changeLoading: (loading = true) => {
                getInstance()?.changeLoading(loading);
            },
            changeOkLoading: (loading: boolean) => {
                getInstance()?.changeOkLoading(loading);
            }
        }
    ]

}