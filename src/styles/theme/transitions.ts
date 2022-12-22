type GetCustomTransitionParams = {
  property?: string;
  type: 'default' | 'fast' | 'slow';
};

const defaultTransitions = {
  default: `all 0.3s ease`,
  fast: `all 0.2s ease`,
  slow: `all 0.5s ease`,
} as const;

function getCustomTransition({ property = 'all', type }: GetCustomTransitionParams) {
  const transitionType = defaultTransitions[type];
  return transitionType.replace('all', property);
}

export const transitions = {
  ...defaultTransitions,
  custom: getCustomTransition,
} as const;
