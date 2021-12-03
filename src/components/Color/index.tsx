import {
  FC, useRef, useState, useContext,
} from 'react';
import copy from 'clipboard-copy';
import { useCheckRightClick } from '../../hooks/useCheckRightClick';
import { useCheckCLickOutside } from '../../hooks/useCheckCLickOutside';
import { PaletteContext } from '../../context/PaletteProvider';

import './index.css';

interface IColorProps {
  values: {
    hex: string;
    rgb: string;
  };

  colorId: string;
}

export const Color: FC<IColorProps> = ({ children, values, colorId }) => {
  const [show, setShow] = useState(false);

  const { removeColor, palette: { _id: paletteId } } = useContext(PaletteContext);
  const colorRef = useRef(null);

  useCheckRightClick(colorRef, (click) => {
    if (click) {
      setShow(true);
    }
  });

  useCheckCLickOutside(colorRef, (click) => {
    if (click) {
      setShow(false);
    }
  });

  return (
    <div ref={colorRef}>
      {children}
      {show && (
        <div className="contextMenu">
          <button
            type="button"
            className="btn"
            onClick={() => copy(values.hex)}
          >
            HEX
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => copy(values.rgb)}
          >
            RGB
          </button>
          <button
            type="button"
            className="btn remove"
            onClick={() => {
              removeColor({ colorId, paletteId });
            }}
          >
            Excluir
          </button>
        </div>
      )}
    </div>
  );
};
