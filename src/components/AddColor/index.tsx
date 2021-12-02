import { FC, FormEvent, useState } from 'react';
import { ButtonCustom } from '../Buttons';

import { Loading } from '../Loading';

import './index.css';

export const AddColor: FC = () => {
  const [color, setColor] = useState('');
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);

  const generateValues = () => {
    const colorSplit = color
      .substring(1)
      .match(/.{2}/g);

    const rgbArr = colorSplit?.map((char) => parseInt(char, 16));
    const rgb = rgbArr?.reduce((acc, num) => `${acc}${num}, `, '');

    return {
      hex: color,
      rgb: `(${rgb})`,
    };
  };

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    setLoading(true);

    const values = generateValues();

    const data = {
      values,
      title,
    };
  };

  return (
    <form className="add-color" onSubmit={handleSubmit}>
      <h3>
        Selecione a cor
      </h3>
      <input
        className="input"
        placeholder="Título da cor"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="color-picker"
        type="color"
      />
      {loading ? (
        <Loading size={50} />
      ) : (
        <ButtonCustom type="submit">PRONTO</ButtonCustom>
      )}
    </form>
  );
};
