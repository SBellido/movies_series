// import React, { FC, ReactEventHandler } from 'react';
// import { IconTypes } from './IconTypes';

// interface CloseIconProps {
//   onClose: ReactEventHandler;
// }

// const CloseIcon: FC<CloseIconProps> = ({ onClose }) => {
//   return (
//     <IconTypes
//       type="close"
//       color="gray"
//       onClick={onClose}
//     />
//   );
// }

// export { CloseIcon };
// CloseIcon.tsx
import React, { FC, ReactEventHandler } from 'react';
import { IconTypes } from './IconTypes';

interface CloseIconProps {
  onClose: ReactEventHandler;
}

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
