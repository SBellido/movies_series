// import React, { FC, ReactNode, ReactEventHandler } from 'react';
// import { ReactComponent as FacebookIcon } from './facebook-blue.svg';
// import CloseIcon from '@mui/icons-material/Close';
// import './IconTypes.css';


// interface IconTypesProps {
//   type: "facebook" | "close";
//   color: string;
//   onClick: ReactEventHandler;
// }

// const iconTypes: Record<string, (color: string) => ReactNode> = {
//   "facebook": (color) => <FacebookIcon className="Icon Icon-svg" fill={color} />,
//   "close": (color) => <CloseIcon className="Icon Icon-svg" style={{ fill: color }} />,
// };

// const IconTypes: FC<IconTypesProps> = ({ type, color, onClick }) => {
//   return (
//     <span
//       className={`Icon-container Icon-container-${type}`}
//       onClick={onClick}
//     >
//       {iconTypes[type](color)}
//     </span>
//   )
// }

// export { IconTypes };

// IconTypes.tsx
import { FC, ReactNode, ReactEventHandler } from 'react';
import CloseIcon from '@mui/icons-material/Close';

interface IconTypesProps {
  type: "facebook" | "close";
  color: string;
  onClick: ReactEventHandler;
}

const iconTypes: Record<string, (color: string) => ReactNode> = {
  "close": (color) => <CloseIcon className="Icon Icon-svg" style={{ fill: color }} />,
};

const IconTypes: FC<IconTypesProps> = ({ type, color, onClick }) => {
  return (
    <span
      className={`Icon-container Icon-container-${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  )
}

export { IconTypes };
