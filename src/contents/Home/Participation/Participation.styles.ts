import styled, { css } from 'styled-components';

export const ParticipationContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 8rem 0;
`;

export const ParticipationTitle = styled.h4`
  ${({ theme }) => css`
    font-size: 2rem;
    font-weight: bold;
    font-family: ${theme.fonts.secondary};
    color: ${theme.colors.headline};
    margin: 0 auto ${theme.spacings.xxl};
  `}
`;

export const ParticipationContent = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  gap: ${({ theme }) => theme.spacings.xxxl};
`;

export const ParticipationItem = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 16.875rem;
    gap: ${theme.spacings.xl};

    span {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      font-family: ${theme.fonts.secondary};
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      box-shadow: ${theme.shadows.floating};
    }

    p {
      color: ${theme.colors.paragraph};
      font-family: ${theme.fonts.primary};
      font-size: 1.25rem;
      text-align: center;
    }
  `}
`;
