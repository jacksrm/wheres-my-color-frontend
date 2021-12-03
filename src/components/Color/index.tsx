import {
  FC, useRef, useState, useContext,
} from 'react';
import copy from 'clipboard-copy';
import { useParams } from 'react-router-dom';

import { useCheckRightClick } from '../../hooks/useCheckRightClick';
import { useCheckCLickOutside } from '../../hooks/useCheckCLickOutside';

import { PaletteContext } from '../../context/PaletteProvider';
import { LoginContext } from '../../context/LoginProvider';
import { UserContext } from '../../context/UserProvider';

import { Loading } from '../Loading';

import './index.css';

interface IColorProps {
  values: {
    hex: string;
    rgb: string;
  };

  colorId: string;
  handleCopy: () => void;
}

export const Color: FC<IColorProps> = ({
  children,
  values,
  colorId,
  handleCopy,
}) => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username } = useParams();
  const { token } = useContext(LoginContext);
  const { username: loggedUsername } = useContext(UserContext);
  const {
    removeColor,
    palette: { _id: paletteId },
  } = useContext(PaletteContext);
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
            onClick={() => {
              copy(values.hex);
              handleCopy();
              setShow(false);
            }}
          >
            HEX
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => {
              copy(values.rgb);
              handleCopy();
              setShow(false);
            }}
          >
            RGB
          </button>
          {loading ? (
            <Loading size={50} customSize={30} />
          ) : (
            (loggedUsername === username) && (
              <button
                type="button"
                className="btn remove"
                onClick={() => {
                  setLoading(true);
                  removeColor({ colorId, paletteId })
                    .then(() => setLoading(false));
                }}
              >
                Excluir
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
};
