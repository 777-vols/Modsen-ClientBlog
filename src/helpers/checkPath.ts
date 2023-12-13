export const activePathHelper = (pathName: string, path: string) => {
  const localeRegExp = /ru(\/)?|en(\/)?/;
  return pathName.replace(localeRegExp, '') === path.replace(localeRegExp, '');
};
