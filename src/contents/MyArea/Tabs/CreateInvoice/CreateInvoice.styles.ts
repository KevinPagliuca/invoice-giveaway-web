import styled, { css } from 'styled-components';

export const CreateInvoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 2rem;
`;

export const CreateInvoiceAdvice = styled.p`
  ${({ theme }) => css`
    font-size: 1rem;
    font-weight: 500;
    color: ${theme.colors.paragraph};

    span {
      color: ${theme.colors.primary};
      font-weight: 700;
    }
  `}
`;

export const CreateInvoiceContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  gap: ${({ theme }) => theme.spacings.xl};
`;

export const CreateInvoiceForm = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: ${({ theme }) => theme.spacings.lg};

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.headline};
    font-family: ${({ theme }) => theme.fonts.secondary};
  }
`;
