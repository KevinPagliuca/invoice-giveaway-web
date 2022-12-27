import { type ReactNode } from 'react';

export interface IModalProps {
  children: ReactNode;
  onOpenChange: (open: boolean) => void;
  open: boolean;
  forceMount?: true;
  enableOverlayClose?: boolean;
}
