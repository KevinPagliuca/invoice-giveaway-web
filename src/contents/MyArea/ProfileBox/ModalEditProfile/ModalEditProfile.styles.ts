import { motion } from 'framer-motion';
import { rgba } from 'polished';
import styled, { css } from 'styled-components';

export const ModalEditProfileContainer = styled(motion.div)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: ${theme.spacings.lg} ${theme.spacings.md} ${theme.spacings.lg} ${theme.spacings.xl};
    box-shadow: ${theme.shadows.spreded};
    backdrop-filter: blur(4px);
    background-color: ${rgba(theme.colors.white, 0.9)};
    border-radius: 25px;
    width: 27.5rem;
    overflow: hidden;
    max-height: 90vh;
  `}
`;

export const ModalContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding-right: ${theme.spacings.md};
    gap: ${theme.spacings.xl};
  `}
`;

export const ModalHeader = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${theme.spacings.md};
  `}
`;

export const CloseButton = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 0;
    color: ${theme.colors.paragraph};
    transition: ${theme.transitions.default};

    &:hover {
      color: ${theme.colors.secondary};
    }
  `}
`;

export const ModalTitle = styled.h2`
  ${({ theme }) => css`
    font-size: 1.5rem;
    font-family: ${theme.fonts.secondary};
    color: ${theme.colors.primary};
  `}
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: ${theme.spacings.md};
    width: 100%;
  `}
`;
