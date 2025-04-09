import type enLocale from '~~/i18n/locales/en.json';

type EnLocale = typeof enLocale;

declare module 'vue-i18n' {
  export interface DefineLocaleMessage extends EnLocale {}
}
