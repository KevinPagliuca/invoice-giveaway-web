import * as DialogPrimitive from '@radix-ui/react-dialog';
import styled from 'styled-components';

export const StyledOverlay = styled(DialogPrimitive.Overlay)`
  background: rgba(0, 0, 0, 0.35);
  position: fixed;
  inset: 0;
  z-index: 1001;
`;

export const StyledContent = styled(DialogPrimitive.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1002;

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

export const StyledTrigger = styled(DialogPrimitive.Trigger)`
  border: 0;
  cursor: pointer;
  background: transparent;
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
`;
