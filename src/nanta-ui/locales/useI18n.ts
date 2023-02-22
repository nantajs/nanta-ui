import { i18n } from './setupI18n';
type I18nTranslationRestParameters = [string, any];

export const t = (key: string, ...arg: any[]) => {
  if (!key || !i18n) {
    return '';
  }  
  // @ts-ignore
  return i18n.global.t(key, ...(arg as I18nTranslationRestParameters));
};