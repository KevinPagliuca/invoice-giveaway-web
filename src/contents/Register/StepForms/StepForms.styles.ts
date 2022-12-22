import styled, { css } from 'styled-components';

export const StepFormContainer = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    gap: ${theme.spacings.md};
    flex: 1;
  `}
`;

export const StepFormTitle = styled.strong`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary};
    color: ${theme.colors.headline};
    font-size: 1.5rem;
    font-weight: 700;
    text-align: start;
    width: 100%;
  `}
`;

export const StepInputWrapper = styled.div`
  width: 100%;
`;

export const StepButtonWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    gap: ${theme.spacings.sm};
  `}
`;
