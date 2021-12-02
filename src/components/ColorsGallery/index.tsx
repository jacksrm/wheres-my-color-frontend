import { FC, useContext, useState } from 'react';

import { PaletteContext } from '../../context/PaletteProvider';

import { AddButton } from '../AddButton';
import { OverlayContainer } from '../OverlayContainer';
import { AddColor } from '../AddColor';

import './index.css';

interface IColorsGalleryProps {
  add?: boolean;
}

export const ColorsGallery: FC<IColorsGalleryProps> = ({ add }) => {
  const [showAddColor, setShowAddColor] = useState(false);

  const { colors } = useContext(PaletteContext);
  return (
    <div className="colors">
      {colors.map(({ values, _id }) => (
        <div
          key={_id}
          style={{ backgroundColor: values.hex }}
          className="color"
        />
      ))}
      {add && <AddButton onClick={() => setShowAddColor(true)} type="square" />}
      {showAddColor && (
        <OverlayContainer handle={() => setShowAddColor(false)}>
          <AddColor afterAction={() => setShowAddColor(false)} />
        </OverlayContainer>
      )}
    </div>
  );
};
