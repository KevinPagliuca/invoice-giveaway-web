import styled, { css } from 'styled-components';

export const MyAreaContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex: 1;
    gap: ${theme.spacings.xl};
    padding: ${theme.spacings.xl} 0;
  `}
`;
