import {
  FC, useState, useContext, FormEvent, useRef,
} from 'react';
import { FiCheck } from 'react-icons/fi';

import { PaletteContext } from '../../context/PaletteProvider';

import { Loading } from '../Loading';

import './index.css';

interface IEditPalette {
  actionAfter: () => void;
}

export const EditPalette: FC<IEditPalette> = ({ actionAfter }) => {
  const { palette: { name, _id: paletteId }, editPalette } = useContext(PaletteContext);
  const titleInputRef = useRef<HTMLInputElement | null>(null);

  const [paletteName, setPaletteName] = useState(name);
  const [loading, setLoading] = useState(false);
  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    setLoading(true);
    editPalette({ name: paletteName, paletteId })
      .then(() => {
        setLoading(false);
        actionAfter();
      });
  };

  return (
    <form className="edit-palette" onSubmit={handleSubmit}>
      <input
        style={{ width: `${paletteName.length}ch` }}
        ref={titleInputRef}
        required
        className="palette-name"
        type="text"
        value={paletteName}
        onChange={(e) => {
          setPaletteName(e.target.value);
          if (titleInputRef.current) {
            titleInputRef.current.style.width = `${paletteName.length}ch`;
          }
        }}
      />
      {loading ? (
        <Loading customSize={25} size={50} />
      ) : (
        <button type="submit">
          <FiCheck />
        </button>
      )}
    </form>
  );
};
