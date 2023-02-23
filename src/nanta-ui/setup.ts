/**
 * Configure and register global directives
 */
import type { App } from 'vue';
import { setupLoadingDirective } from './directives/loading';
import { setupI18n } from './locales/setupI18n';
import { I18nOptions } from 'vue-i18n';
import { messages } from './locales/messages'

const options = {
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  globalInjection: true,
  messages,
} as I18nOptions;

export interface NantaSetupOption {
  i18n: I18nOptions,
  locale?: string,
  loadingDir?: boolean;
}

const DEFAULT_OPTION: NantaSetupOption = {
  i18n: options,
  loadingDir: true,
}

export function setupNanta(app: App<Element>, option?: NantaSetupOption) {
  console.log(option);
  const options = option ? { ...DEFAULT_OPTION, ...option } : DEFAULT_OPTION;

  console.log(options)
  if (options.locale) {
    options.i18n.locale = options.locale;
  }

  setupI18n(app, options.i18n)
  if (options.loadingDir) {
    setupLoadingDirective(app);
  }
}
