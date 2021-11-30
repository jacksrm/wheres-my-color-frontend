import { FC } from 'react';

import { IColors } from '../../types';

import './index.css';

interface IColorsGalleryProps {
  colors: IColors[];
}

export const ColorsGallery: FC<IColorsGalleryProps> = ({ colors }) => (
  <div className="colors">
    {colors.map(({ values, _id }) => (
      <div
        key={_id}
        style={{ backgroundColor: values.hex }}
        className="color"
      />
    ))}
  </div>
);
