/**
 * Returns the locale based on the current route.
 * @returns The locale string.
 */
export const useLocale = (): string => {
  const route = useRoute();
  const regExp: RegExp = /tw/;

  return regExp.test(route.fullPath) ? localeEnum.tw : localeEnum.us;
};
