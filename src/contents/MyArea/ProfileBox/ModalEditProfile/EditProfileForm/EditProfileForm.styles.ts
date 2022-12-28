import styled, { css } from 'styled-components';

export const EditProfileFormContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    gap: ${theme.spacings.lg};
    flex: 1;
    position: relative;
  `}
`;

export const EditProfileFormTitle = styled.strong`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary};
    color: ${theme.colors.headline};
    font-size: 1.5rem;
    font-weight: 700;
    text-align: start;
    width: 100%;
  `}
`;

export const EditProfileFormFieldsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: ${theme.spacings.md};
  `}
`;

export const EditProfileFormInputWrapper = styled.div`
  width: 100%;
`;

export const EditProfileFormButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  position: sticky;
  bottom: 0;
`;

export const Divider = styled.span`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    color: ${theme.colors.paragraph};
    background-color: ${theme.colors.secondary};
    height: 4px;
    border-radius: 25px;
  `}
`;
