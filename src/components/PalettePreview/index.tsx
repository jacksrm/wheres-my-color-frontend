import { FC, useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  FiTrash2, FiEdit, FiXSquare, FiShare2,
} from 'react-icons/fi';
import copy from 'clipboard-copy';

import { UserContext } from '../../context/UserProvider';
import { PaletteContext } from '../../context/PaletteProvider';

import { ColorsGallery } from '../ColorsGallery';
import { EditPalette } from '../EditPalette';

import './index.css';
import { SuccessMessage } from '../SuccessMessage';

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
  const { username } = useParams();

  const [edit, setEdit] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const appUrl = window.location.origin;

  return (
    <section className="palette-preview">
      <div className="controls">
        {edit ? (
          <EditPalette actionAfter={() => setEdit(false)} />
        ) : (
          <Link to={`palette/${paletteId}`}>{title}</Link>
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
          <button
            onClick={() => {
              copy(`${appUrl}/${username}/palette/${paletteId}`);
              setShowAlert(true);
              setTimeout(() => setShowAlert(false), 6000);
            }}
            type="button"
          >
            <FiShare2 />
          </button>
        </div>
      </div>
      {showAlert && (
        <SuccessMessage message="Link da paleta copiado pada área de transferência!" />
      )}
      <ColorsGallery add={showAdd} />
    </section>
  );
};
