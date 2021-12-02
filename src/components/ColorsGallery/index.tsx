import { FC, useContext, useState } from 'react';
import copy from 'clipboard-copy';
import { SuccessMessage } from 'components/SuccessMessage';
import { PaletteContext } from '../../context/PaletteProvider';
import { AddButton } from '../AddButton';
import { OverlayContainer } from '../OverlayContainer';
import { AddColor } from '../AddColor';

import './index.css';

interface IColorsGalleryProps {
  add?: boolean;
  center?: boolean;
}

export const ColorsGallery: FC<IColorsGalleryProps> = ({ add, center }) => {
  const [showAddColor, setShowAddColor] = useState(false);
  const [show, setShow] = useState(false);

  const { palette: { colors } } = useContext(PaletteContext);

  const notifyColor = () => {
    if (show) return <SuccessMessage message="Cor copiada com sucesso!" />;
    return <p style={{ position: 'absolute', display: 'none' }} />;
  };

  return (
    <div className={`colors ${center && 'center'}`}>
      {(colors ?? []).map(({ values, _id }) => (
        <div>
          {notifyColor()}
          <button
            type="button"
            className="btnColors"
            onClick={() => {
              copy(values.hex);
              setShow(true);
              setTimeout(() => setShow(false), 6000);
            }}
          >
            <div
              key={_id}
              style={{ backgroundColor: values.hex }}
              className="color"
            />
          </button>
        </div>
      ))}
      {add && (
      <AddButton
        onClick={() => setShowAddColor(true)}
        type="square"
      />
      )}
      {showAddColor && (
        <OverlayContainer handle={() => setShowAddColor(false)}>
          <AddColor afterAction={() => setShowAddColor(false)} />
        </OverlayContainer>
      )}
    </div>
  );
};
