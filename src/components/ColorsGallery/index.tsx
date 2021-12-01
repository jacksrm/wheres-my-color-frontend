import { FC, useState } from 'react';

import { AddButton } from '../AddButton';
import { OverlayContainer } from '../OverlayContainer';
import { AddColor } from '../AddColor';

import { IColors } from '../../types';

import './index.css';

interface IColorsGalleryProps {
  colors: IColors[];
  add?: boolean;
}

export const ColorsGallery: FC<IColorsGalleryProps> = ({ colors, add }) => {
  const [showAddColor, setShowAddColor] = useState(false);
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
          <AddColor />
        </OverlayContainer>
      )}
    </div>
  );
};
