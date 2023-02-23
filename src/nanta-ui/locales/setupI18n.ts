import type { App } from 'vue';
import { createI18n } from 'vue-i18n';
import { I18nOptions } from 'vue-i18n'

export let i18n: ReturnType<typeof createI18n>;

export function setupI18n(app: App<Element>, options: I18nOptions) {
  i18n = createI18n(options);
  app.use(i18n);
}