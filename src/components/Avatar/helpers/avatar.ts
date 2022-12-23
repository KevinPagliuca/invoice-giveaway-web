const defaultColors = [
  '#232ED1',
  '#1B1464',
  '#4A235A',
  '#4C243B',
  '#6D1F62',
  '#419D78',
  '#456528',
  '#3A6024',
  '#6CB143',
  '#7F2CCB',
  '#F038FF',
  '#EF271B',
  '#DD4B1A',
  '#F56416',
  '#E28413',
  '#EA1744',
  '#D72638',
  '#640D14',
];

export function getRandomColor(str: string): string {
  const hash = str.split('').reduce((acc, char) => {
    return acc + char.charCodeAt(0);
  }, 0);

  return defaultColors[hash % defaultColors.length];
}

export function getNameInitials(name: string, maxInitials: number) {
  return name
    .split(/\s/)
    .map((part) => part.substring(0, 1).toUpperCase())
    .filter((v) => !!v)
    .slice(0, maxInitials)
    .join('')
    .toUpperCase();
}
