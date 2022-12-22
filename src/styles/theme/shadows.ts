import { rgba } from 'polished';
import { getValueByPath } from 'helpers';

import { colors, type ThemeColorsOptions } from './colors';

const defaultShadows = {
  grounded: '0px 0px 4px rgba(0, 0, 0, 0.3)',
  raised: '0px 4px 4px rgba(0, 0, 0, 0.3)',
  floating: '0px 8px 16px rgba(0, 0, 0, 0.3)',
  spreded: '0px 0px 16px rgba(0, 0, 0, 0.3)',
} as const;

type GetCustomShadowParams = {
  color: string | ThemeColorsOptions;
  type: keyof typeof defaultShadows;
};

function getCustomShadow({ color, type }: GetCustomShadowParams): string {
  const shadow = defaultShadows[type];
  const colorValue = getValueByPath(colors, color);

  if (!colorValue) return shadow;

  const shadowColor = rgba(colorValue, 0.3);
  return shadow.replace('rgba(0, 0, 0, 0.3)', shadowColor);
}

export const shadows = {
  ...defaultShadows,
  custom: getCustomShadow,
} as const;
