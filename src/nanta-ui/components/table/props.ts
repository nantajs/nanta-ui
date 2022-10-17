
import type { PropType } from 'vue';
import type { BasicColumn } from './types/table';

export const tableProps = {
    columns: {
        type: [Array] as PropType<BasicColumn[]>,
        default: () => [],
      },
}