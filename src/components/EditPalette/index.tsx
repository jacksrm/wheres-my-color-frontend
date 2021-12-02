import {
  FC, useState, useContext, FormEvent, useRef,
} from 'react';
import { FiCheck } from 'react-icons/fi';

import { PaletteContext } from '../../context/PaletteProvider';

import './index.css';

export const EditPalette: FC = () => {
  const { palette: { name } } = useContext(PaletteContext);
  const titleInputRef = useRef<HTMLInputElement | null>(null);

  const [paletteName, setPaletteName] = useState(name);

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    console.log(paletteName);
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
      <button type="submit">
        <FiCheck />
      </button>
    </form>
  );
};
