import { FC } from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2 } from 'react-icons/fi';

import { ColorsGallery } from '../ColorsGallery';

import { IColors } from '../../types';

import './index.css';

interface IPalettePreviewProps {
  colors: IColors[];
  title: string;
  paletteId: string;
  showDelete: boolean;
}

export const PalettePreview: FC<IPalettePreviewProps> = ({
  colors,
  title,
  paletteId,
  showDelete,
}) => (
  <section className="palette-preview">
    <div className="controls">
      <Link to={`/palette/${paletteId}`}>{title}</Link>

      <div className="actions">
        {showDelete && (
          <button type="button" className="delete-button">
            <FiTrash2 />
          </button>
        )}
      </div>
    </div>
    <ColorsGallery colors={colors} />
  </section>
);
