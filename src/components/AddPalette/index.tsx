import { FC, useState } from 'react';
import { IAddPaletteData } from 'types';

import { ButtonCustom } from '../Buttons';
import { Loading } from '../Loading';

import './index.css';

export const AddPalette: FC<{
  handleAddPalette: (data: IAddPaletteData) => void;
}> = ({ handleAddPalette }) => {
  const [name, setName] = useState('');
  const [isPublic, setIsPublic] = useState(true);
  const [loading, setLoading] = useState(false);

  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault();
        setLoading(true);
        handleAddPalette({ name, isPublic });
        setLoading(false);
      }}
      className="add-palette"
    >
      <input
        className="input"
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Nome da paleta, ex: Paleta Massa!"
      />
      <label htmlFor="is-public">
        {'Pública? '}
        <input
          id="is-public"
          type="checkbox"
          checked={isPublic}
          onChange={() => setIsPublic((prev) => !prev)}
        />
      </label>

      {loading ? (
        <Loading size={50} />
      ) : (
        <ButtonCustom type="submit">PRONTO</ButtonCustom>
      )}
    </form>
  );
};
