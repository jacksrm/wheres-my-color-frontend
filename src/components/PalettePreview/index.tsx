import {
  FC, useContext, useState,
} from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2, FiEdit, FiXSquare } from 'react-icons/fi';

import { UserContext } from '../../context/UserProvider';
import { PaletteContext } from '../../context/PaletteProvider';

import { ColorsGallery } from '../ColorsGallery';
import { EditPalette } from '../EditPalette';

import './index.css';

interface IPalettePreviewProps {
  showDelete: boolean;
  showAdd?: boolean;
  showEdit?: boolean;
}

export const PalettePreview: FC<IPalettePreviewProps> = ({
  showDelete,
  showAdd,
  showEdit,
}) => {
  const { removePalette } = useContext(UserContext);
  const {
    palette: { name: title, _id: paletteId },
  } = useContext(PaletteContext);

  const [edit, setEdit] = useState(false);

  return (
    <section className="palette-preview">
      <div className="controls">
        {edit ? (
          <EditPalette actionAfter={() => setEdit(false)} />
        ) : (
          <Link to={`/palette/${paletteId}`}>{title}</Link>
        )}

        <div className="actions">
          {showEdit && (
            <button
              onClick={() => setEdit((prev) => !prev)}
              type="button"
              className="edit-button"
            >
              {edit ? <FiXSquare className="cancel" /> : <FiEdit />}
            </button>
          )}
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
