import ReactInputMask from 'react-input-mask';
import CurrencyInput from 'react-currency-input-field';

import styled, { css } from 'styled-components';

import {
  type InputLabelAttributes,
  type InputFieldAttributes,
  type InputContainerAttributes,
} from './Input.interfaces';

const FIELDSET_BORDER_WIDTH = '2px';

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.sm};
    flex: 1;
  `}
`;

export const InputContainer = styled.fieldset<InputContainerAttributes>`
  ${({ theme, hasError }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    border: ${FIELDSET_BORDER_WIDTH} solid ${theme.colors.border};
    border-radius: 8px;
    position: relative;
    max-height: ${theme.sizes.inputHeight};
    transition: ${theme.transitions.default};
    width: 100%;

    &:focus-within {
      border-color: ${theme.colors.primary};

      label {
        color: ${theme.colors.primary};
      }
    }

    ${hasError &&
    css`
      border-color: ${theme.colors.error};

      label {
        color: ${theme.colors.error};
      }
    `}
  `}
`;

export const InputLabel = styled.label<InputLabelAttributes>`
  ${({ theme, hasPlaceholder }) => css`
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    left: ${theme.spacings.md};
    color: ${theme.colors.paragraph};
    padding: 0 0 0 ${theme.spacings.xs};
    font-size: 1rem;
    font-family: ${theme.fonts.primary};
    line-height: 1;
    font-weight: 500;
    top: 50%;
    transform: translateY(-50%);
    user-select: none;
    transition: ${theme.transitions.default};

    ${hasPlaceholder &&
    css`
      & {
        top: 0;
      }
    `}
  `}
`;

export const StyledLegend = styled.legend<InputLabelAttributes>`
  ${({ theme, hasPlaceholder }) => css`
    margin-left: ${theme.spacings.md};
    visibility: hidden;
    opacity: 0;
    line-height: 0;
    width: 0;
    font-family: ${theme.fonts.primary};
    font-size: 1rem;
    font-weight: 500;

    ${hasPlaceholder &&
    css`
      width: auto;
      padding: 0 ${theme.spacings.sm};
    `}
  `}
`;

const InputStyles = css<InputFieldAttributes>`
  ${({ theme, hasPlaceholder }) => css`
    padding: ${theme.spacings.md};
    background: transparent;
    color: ${theme.colors.headline};
    flex: 1;
    border: 0;
    outline: 0;
    border-radius: 6px;
    height: ${theme.sizes.inputHeight};
    max-height: calc(${theme.sizes.inputHeight} - ${FIELDSET_BORDER_WIDTH} * 2);
    transition: ${theme.transitions.default};
    font-family: ${theme.fonts.primary};
    font-size: 1rem;
    font-weight: 500;

    &.hasPlaceholder {
      & + label {
        font-size: 0.875rem;
        left: 1.25rem;
        top: 0;
      }

      & ~ legend {
        width: auto;
        font-size: 0.875rem;
        padding: 0 ${theme.spacings.sm};
      }
    }

    ${!hasPlaceholder &&
    css`
      &:focus + label,
      &:not(:placeholder-shown)&:not(:focus) ~ label {
        top: 0;
        font-size: 0.875rem;
        left: 1.25rem;
      }

      &:focus ~ legend,
      &:not(:placeholder-shown)&:not(:focus) ~ legend {
        width: auto;
        font-size: 0.875rem;
        padding: 0 ${theme.spacings.sm};
      }
    `}
  `}
`;

export const InputField = styled.input`
  ${InputStyles};
`;

export const InputFieldMasked = styled(ReactInputMask)`
  ${InputStyles};
`;

export const InputFieldCurrency = styled(CurrencyInput)`
  ${InputStyles};
`;

export const ShowPasswordButton = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 0;
    outline: 0;
    margin-right: ${theme.spacings.md};
    transition: ${theme.transitions.default};
    color: ${theme.colors.border};
    border: 2px solid transparent;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;

    &:hover,
    &:focus {
      color: ${theme.colors.primary};
      border-color: ${theme.colors.primary};
    }
  `}
`;

export const ErrorMessage = styled.span`
  ${({ theme }) => css`
    font-size: 1rem;
    line-height: 1;
    font-weight: 500;
    font-family: ${theme.fonts.primary};
    color: ${theme.colors.error};
    transition: ${theme.transitions.default};
  `}
`;
