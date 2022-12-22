import objectPath from 'object-path';

export const getValueByPath = <T extends string>(root: object, path?: T): string | undefined => {
  if (!path) return;
  const pathFormatted = path.replace(/\[/g, '.').replace(/\]/g, '').split('.');
  const value = objectPath.get(root, pathFormatted);
  return !value ? path : value.toString();
};
