import { FC } from 'react';
import { IconTypes } from './IconTypes';
import { CloseIconProps } from '../../interfaces/interfaces';

const CloseIcon: FC<CloseIconProps> = ({ onClose }) => {
  return (
    <IconTypes
      type="close"
      color="gray"
      onClick={onClose}
    />
  );
}

export { CloseIcon };
