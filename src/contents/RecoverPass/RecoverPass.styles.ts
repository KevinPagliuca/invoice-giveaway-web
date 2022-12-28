import { rgba } from 'polished';
import styled, { css } from 'styled-components';

export const RecoverPassContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.xl};
    background: ${theme.colors.white};
    flex: 1;
    width: 100%;
  `}
`;

export const RecoverPassContent = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: ${theme.spacings.xl} ${theme.spacings.xxl};
    box-shadow: ${theme.shadows.spreded};
    backdrop-filter: blur(4px);
    background-color: ${rgba(theme.colors.white, 0.85)};
    border-radius: 25px;
    width: 28rem;
  `}
`;

export const RecoverPassTitle = styled.h4`
  ${({ theme }) => css`
    font-size: 2rem;
    font-family: ${theme.fonts.secondary};
    color: ${theme.colors.headline};
  `}
`;
export const RecoverPassSubtitle = styled.h6`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    font-weight: 500;
    color: ${theme.colors.paragraph};
    margin-bottom: ${theme.spacings.md};
    gap: ${theme.spacings.xs};

    > span {
      color: ${theme.colors.primary};
    }
  `}
`;

export const CommonFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: ${({ theme }) => theme.spacings.md};
`;

export const CommonFormButtonWrapper = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.spacings.md};
`;
