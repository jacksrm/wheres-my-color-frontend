import { FC } from 'react';

import { IColors } from '../../types';

import './index.css';

interface IPalettePreviewProps {
  colors: IColors[];
  title: string;
}

export const PalettePreview: FC<IPalettePreviewProps> = ({ colors, title }) => (
  <section className="palette-preview">
    <h3>{title}</h3>
    <div className="colors">
      {colors.map(({ values, _id }) => (
        <div
          key={_id}
          style={{ backgroundColor: values.hex }}
          className="color"
        />
      ))}
    </div>
  </section>
);
