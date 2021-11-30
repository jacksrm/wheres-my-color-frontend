import { FC } from 'react';
import { Link } from 'react-router-dom';

import { ColorsGallery } from '../ColorsGallery';

import { IColors } from '../../types';

import './index.css';

interface IPalettePreviewProps {
  colors: IColors[];
  title: string;
  paletteId: string;
}

export const PalettePreview: FC<IPalettePreviewProps> = ({ colors, title, paletteId }) => (
  <section className="palette-preview">
    <Link to={`/palette/${paletteId}`}>{title}</Link>
    <ColorsGallery colors={colors} />
  </section>
);
