import styled, { css } from 'styled-components';

import { type StepperLabelAttributes, type StepperItemAttributes } from './Stepper.interfaces';

const circleSize = 'clamp(1.5rem, 5vw, 3rem)';
const spacing = 'clamp(0.25rem, 2vw, 0.5rem)';

export const StepperContainer = styled.ol`
  display: flex;
  flex-wrap: wrap;
`;

export const StepperItem = styled.li<StepperItemAttributes>`
  ${({ theme, stepNumber, isCompleted, isCurrentStep, isActive, isDisabled }) => css`
    display: flex;
    flex-direction: column;
    flex: 1;
    text-align: center;
    cursor: ${isDisabled ? 'not-allowed' : 'pointer'};

    &::before {
      content: '${stepNumber}';
      display: flex;
      align-items: center;
      justify-content: center;

      margin: 0 auto 0.5rem;
      width: ${circleSize};
      height: ${circleSize};
      border-radius: 50%;
      font-weight: 500;

      border: 2px solid transparent;
      background-color: ${isCompleted || isCurrentStep ? theme.colors.primary : theme.colors.gray};
      color: ${theme.colors.white};
      transition: ${theme.transitions.default};

      opacity: ${isDisabled ? 0.85 : 1};

      ${isActive &&
      css`
        border-color: ${theme.colors.secondary};
        background-color: ${theme.colors.secondary};
        color: ${theme.colors.white};
        font-weight: 700;
      `}
    }

    &:hover {
      &::before {
        ${isActive
          ? css`
              box-shadow: ${theme.shadows.custom({
                color: theme.colors.secondary,
                type: 'floating',
              })};
            `
          : css`
              box-shadow: ${theme.shadows.custom({
                color: isCompleted || isCurrentStep ? theme.colors.primary : theme.colors.gray,
                type: 'floating',
              })};
            `}
      }
    }

    &:not(:last-child) {
      &::after {
        content: '';
        position: relative;
        top: calc(${circleSize} / 2);
        width: calc(100% - ${circleSize} - calc(${spacing} * 2));
        left: calc(50% + calc(${circleSize} / 2 + ${spacing}));
        height: 4px;
        border-radius: 8px;
        background-color: ${theme.colors.gray};
        order: -1;
        transition: ${theme.transitions.default};

        ${isCompleted &&
        css`
          background-color: ${theme.colors.primary};
        `}
      }
    }
  `}
`;

export const StepperLabel = styled.span<StepperLabelAttributes>`
  ${({ theme, isActive, isCompleted, isCurrentStep, isDisabled }) => css`
    font-size: ${theme.fonts.primary};
    cursor: inherit;

    color: ${isDisabled ? theme.colors.gray : theme.colors.black};
    opacity: ${isDisabled ? 0.85 : 1};

    ${(isCompleted || isCurrentStep) &&
    css`
      color: ${theme.colors.primary};
    `}

    ${isActive &&
    css`
      color: ${theme.colors.secondary};
      font-weight: 700;
    `}
  `}
`;
