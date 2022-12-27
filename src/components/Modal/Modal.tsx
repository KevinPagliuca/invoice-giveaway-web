import React from 'react';

import * as Dialog from '@radix-ui/react-dialog';
import { AnimatePresence, motion } from 'framer-motion';

import { type IModalProps } from './Modal.interfaces';
import * as S from './Modal.styles';

export const Modal = ({ open, onOpenChange, children, forceMount = true }: IModalProps) => {
  return (
    <Dialog.Root onOpenChange={onOpenChange} modal open={open}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount={forceMount}>
            <S.StyledOverlay asChild forceMount={forceMount}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, backdropFilter: 'blur(4px)' }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </S.StyledOverlay>
            <S.StyledContent forceMount={forceMount}>{children}</S.StyledContent>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
};
