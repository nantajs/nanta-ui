<template>
  <Select @dropdown-visible-change="handleFetch" v-bind="$attrs" @change="handleChange" :options="getOptions">
    <template #[item]="data" v-for="item in Object.keys($slots)">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
    <template #suffixIcon v-if="loading">
      <LoadingOutlined spin />
    </template>
    <template #notFoundContent v-if="loading">
      <span>
        <LoadingOutlined spin class="mr-1" />
        {{ t('form.apiSelectNotFound') }}
      </span>
    </template>
  </Select>
</template>
<script lang="ts">
import { defineComponent, PropType, ref, watchEffect, computed, unref, watch } from 'vue';
import { Select } from 'ant-design-vue';
import { isFunction } from '../../../utils/is';
import { useRuleFormItem } from '../hooks/useFormItem';
import { useAttrs } from '../../../core/hooks/useAttrs';
import { get, omit } from 'lodash-es';
import { LoadingOutlined } from '@ant-design/icons-vue';
import { t } from '../../../locales/useI18n';
import type { Recordable } from '../../..'
import { propTypes } from '../../../utils/propTypes';

type OptionsItem = { label: string; value: string; disabled?: boolean };

export default defineComponent({
  name: 'ApiSelect',
  components: {
    Select,
    LoadingOutlined,
  },
  inheritAttrs: false,
  props: {
    value: [Array, Object, String, Number],
    numberToString: propTypes.bool,
    api: {
      type: Function as PropType<(arg?: Recordable) => Promise<OptionsItem[]>>,
      default: null,
    },
    // api params
    params: {
      type: Object as PropType<Recordable>,
      default: () => ({}),
    },
    // support xxx.xxx.xx
    resultField: propTypes.string.def('list'),
    labelField: propTypes.string.def('label'),
    valueField: propTypes.string.def('value'),
    immediate: propTypes.bool.def(true),
    alwaysLoad: propTypes.bool.def(false),
  },
  emits: ['options-change', 'change'],
  setup(props, { emit }) {
    const options = ref<OptionsItem[]>([]);
    const loading = ref(false);
    const isFirstLoad = ref(true);
    const emitData = ref<any[]>([]);
    const attrs = useAttrs();
    console.log(unref(attrs))

    // Embedded in the form, just use the hook binding to perform form verification
    const [state] = useRuleFormItem(props, 'value', 'change', emitData);

    const getOptions = computed(() => {
      const { labelField, valueField, numberToString } = props;

      return unref(options).reduce((prev, next: Recordable) => {
        if (next) {
          const value = next[valueField];
          prev.push({
            ...omit(next, [labelField, valueField]),
            label: next[labelField],
            value: numberToString ? `${value}` : value,
          });
        }
        return prev;
      }, [] as OptionsItem[]);
    });

    watchEffect(() => {
      props.immediate && !props.alwaysLoad && fetch();
    });

    watch(
      () => props.params,
      () => {
        !unref(isFirstLoad) && fetch();
      },
      { deep: true },
    );

    async function fetch() {
      const api = props.api;
      if (!api || !isFunction(api)) return;
      options.value = [];
      try {
        loading.value = true;
        const res = await api(props.params);
        if (Array.isArray(res)) {
          options.value = res;
          emitChange();
          return;
        }
        if (props.resultField) {
          options.value = get(res, props.resultField) || [];
        }
        emitChange();
      } catch (error) {
        console.warn(error);
      } finally {
        loading.value = false;
      }
    }

    async function handleFetch(visible: boolean) {
      if (visible) {
        if (props.alwaysLoad) {
          await fetch();
        } else if (!props.immediate && unref(isFirstLoad)) {
          await fetch();
          isFirstLoad.value = false;
        }
      }
    }

    function emitChange() {
      emit('options-change', unref(getOptions));
    }

    // @ts-ignore
    function handleChange(_, ...args) {
      emitData.value = args;
      emit('change', args)
    }

    return { state, attrs, getOptions, loading, t, handleFetch, handleChange };
  },
});
</script>
