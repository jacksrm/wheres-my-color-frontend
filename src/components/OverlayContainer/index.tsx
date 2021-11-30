import {
  FC, useEffect, useRef, useState,
} from 'react';
import { FiX } from 'react-icons/fi';

import { useCheckCLickOutside } from '../../hooks/useCheckCLickOutside';

import './index.css';

export const OverlayContainer: FC<{ handle: () => void }> = ({ children, handle }) => {
  const [visibility, setVisibility] = useState<'hidden' | 'visible'>('visible');

  const containerRef = useRef(null);

  useEffect(() => handle);

  useCheckCLickOutside(containerRef, (outsideClick) => {
    if (outsideClick) {
      setVisibility('hidden');
    }
  });

  return (
    <div style={{ visibility }} className={`overlay ${visibility}`}>
      <div ref={containerRef} className="container">
        <button
          className="close"
          onClick={() => {
            setVisibility('hidden');
            setTimeout(() => handle(), 200);
          }}
          type="button"
        >
          <FiX />
        </button>
        {children}
      </div>
    </div>
  );
};
