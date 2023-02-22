/**
 * Configure and register global directives
 */
import type { App } from 'vue';
import { setupLoadingDirective } from './directives/loading';
import { setupI18n } from './locales/setupI18n';
import { I18nOptions } from 'vue-i18n'

const messages = {
  "en": {
    message: {
      okText: 'OK'
    }
  },
  "zh-CN": {
    message: {
      okText: '确认'
    }
  }
}

const options = {
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  globalInjection: true,
  messages,
} as I18nOptions;

export interface NantaOption {
  i18n: I18nOptions,
  locale?: string
}

const DEFAULT_OPTION: NantaOption = {
  i18n: options,
}

export function setupNanta(app: App<Element>, option?: NantaOption) {
  if (!option) {
    option = DEFAULT_OPTION;
  }
  if (!option.i18n) {
    option.i18n = options;
  }

  if (option.locale) {
    option.i18n.locale = option.locale;
  }

  setupI18n(app, option.i18n)
  setupLoadingDirective(app);
}
