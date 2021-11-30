import { AddButton } from 'components/AddButton';
import { FC } from 'react';

import { IColors } from '../../types';

import './index.css';

interface IColorsGalleryProps {
  colors: IColors[];
  add?: boolean;
}

export const ColorsGallery: FC<IColorsGalleryProps> = ({ colors, add }) => (
  <div className="colors">
    {colors.map(({ values, _id }) => (
      <div
        key={_id}
        style={{ backgroundColor: values.hex }}
        className="color"
      />
    ))}
    {add && <AddButton type="square" />}
  </div>
);
