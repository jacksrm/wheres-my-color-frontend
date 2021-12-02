import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2 } from 'react-icons/fi';

import { UserContext } from '../../context/UserProvider';
import { PaletteContext } from '../../context/PaletteProvider';

import { ColorsGallery } from '../ColorsGallery';

import './index.css';

interface IPalettePreviewProps {
  showDelete: boolean;
  showAdd: boolean;
}

export const PalettePreview: FC<IPalettePreviewProps> = ({
  showDelete,
  showAdd,
}) => {
  const { removePalette } = useContext(UserContext);
  const {
    name: title,
    _id: paletteId,
  } = useContext(PaletteContext);
  return (
    <section className="palette-preview">
      <div className="controls">
        <Link to={`/palette/${paletteId}`}>{title}</Link>

        <div className="actions">
          {showDelete && (
            <button
              onClick={() => removePalette({ paletteId })}
              type="button"
              className="delete-button"
            >
              <FiTrash2 />
            </button>
          )}
        </div>
      </div>
      <ColorsGallery add={showAdd} />
    </section>
  );
};
