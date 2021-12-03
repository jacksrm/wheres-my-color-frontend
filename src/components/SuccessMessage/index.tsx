import {
  FC, useEffect, useState,
} from 'react';

import AnimationShake from '../../images/AnimationShake.png';
import AnimationRipple from '../../images/AnimationRipple.png';

import './index.css';

interface ISuccessMessageProps {
  animation?: 'shake' | 'ripple';
  message: string;
}

export const SuccessMessage: FC<ISuccessMessageProps> = ({ message, animation }) => {
  const [visibility, setVisibility] = useState('visible');
  const [display, setDisplay] = useState('flex');

  useEffect(() => {
    setTimeout(() => setVisibility('hidden'), 3000);
    setTimeout(() => setDisplay('none'), 6000);
  }, []);

  switch (animation) {
    case 'shake':
      return (
        <div style={{ display }} className={`success-message ${visibility}`}>
          <img src={AnimationShake} alt="logo shaking" />
          <p>{message}</p>
        </div>
      );
    case 'ripple':
      return (
        <div style={{ display }} className={`success-message ${visibility}`}>
          <img src={AnimationRipple} alt="logo rippling" />
          <p>{message}</p>
        </div>
      );
    default:
      return (
        <div style={{ display }} className={`success-message ${visibility}`}>
          <p>{message}</p>
        </div>
      );
  }
};
