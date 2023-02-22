import { i18n } from './setupI18n';

export const t = (key: string) => {
  if (!key || !i18n) {
    return '';
  }  
  // @ts-ignore
  return i18n.global.t(key);
};