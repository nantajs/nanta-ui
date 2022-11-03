import NantaButton from './nanta-ui/components/button/NantaButton.vue'
import NantaForm from './nanta-ui/components/form/NantaForm.vue'
import NantaModal from './nanta-ui/components/modal/NantaModal.vue'
import NantaFormModal from './nanta-ui/components/modal/NantaFormModal.vue';
import NantaTable from './nanta-ui/components/table/NantaTable.vue'
import NantaTableAction from './nanta-ui/components/table/components/NantaTableAction.vue'

import { Icon, SvgIcon } from './nanta-ui/components/icon/index'
import type { VueNode, Recordable, Fn } from './nanta-ui/core/types/type'

export { NantaButton, NantaForm, NantaModal, Icon, SvgIcon, NantaTable, NantaTableAction, NantaFormModal }
export type { VueNode, Recordable, Fn }

import { setupNantaDirectives as setupNanta } from './nanta-ui/directives'
export { setupNanta }

export * from './nanta-ui/components/button'
export * from './nanta-ui/components/form'
export * from './nanta-ui/components/loading'
export * from './nanta-ui/components/modal'
export * from './nanta-ui/components/table'
export * from './nanta-ui/utils/propTypes'
export * from './nanta-ui/index'