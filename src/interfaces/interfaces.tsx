
import { ReactEventHandler } from 'react';

export interface CloseIconProps {
  onClose: ReactEventHandler;
}

export interface Program {
  title: string;
  releaseYear: number;
  programType: string;
  images: {
    'Poster Art': {
      url: string;
    };
  };
  description: string;
}

export interface CardProgramProps {
  image: { url: string };
  title: string;
  description: string;
  releaseYear: string;
}


