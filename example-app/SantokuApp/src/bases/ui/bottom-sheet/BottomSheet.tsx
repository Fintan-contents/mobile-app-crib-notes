import React from 'react';

import {ModalBackdrop, ModalBackdropProps} from '../modal/ModalBackdrop';
import {ModalContainer, ModalContainerProps} from '../modal/ModalContainer';

export type BottomSheetProps = {
  isVisible: boolean;
  /**
   * ModalBackdropのProps
   */
  modalBackdropProps?: Omit<ModalBackdropProps, 'isVisible'>;
  /**
   * ModalContainerのProps
   */
  modalContainerProps?: Omit<ModalContainerProps, 'isVisible'>;
};

export const BottomSheet: React.FC<React.PropsWithChildren<BottomSheetProps>> = ({
  isVisible,
  modalBackdropProps,
  modalContainerProps,
  children,
}) => {
  return (
    <ModalBackdrop isVisible={isVisible} {...modalBackdropProps}>
      <ModalContainer isVisible={isVisible} {...modalContainerProps}>
        {children}
      </ModalContainer>
    </ModalBackdrop>
  );
};
