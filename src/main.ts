import NantaButton from './nanta-ui/components/button/NantaButton.vue'
import PopConfirmButton from './nanta-ui/components/button/PopConfirmButton.vue'
import NantaForm from './nanta-ui/components/form/NantaForm.vue'
import NantaModal from './nanta-ui/components/modal/NantaModal.vue'
import NantaFormModal from './nanta-ui/components/modal/NantaFormModal.vue'
import NantaTable from './nanta-ui/components/table/NantaTable.vue'
import NantaTableAction from './nanta-ui/components/table/components/NantaTableAction.vue'
import Dropdown from './nanta-ui/components/dropdown/Dropdown.vue'

import { Icon, SvgIcon } from './nanta-ui/components/icon/index'
import type { VueNode, Recordable, Fn } from './nanta-ui/core/types/type'
import { setupNanta, NantaSetupOption } from './nanta-ui/setup'

export { setupNanta}
export { NantaButton, NantaForm, NantaModal, Icon, SvgIcon, NantaTable, NantaTableAction, NantaFormModal, PopConfirmButton, Dropdown }
export type { VueNode, Recordable, Fn, NantaSetupOption }

export * from './nanta-ui/components/button'
export * from './nanta-ui/components/form'
export * from './nanta-ui/components/form/validators/index'
export * from './nanta-ui/components/loading'
export * from './nanta-ui/components/modal'
export * from './nanta-ui/components/table'
export * from './nanta-ui/utils/propTypes'
export * from './nanta-ui/index'