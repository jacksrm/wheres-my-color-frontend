import {
  FC, FormEvent, useContext, useState,
} from 'react';

import { ButtonCustom } from '../Buttons';
import { Loading } from '../Loading';

import { PaletteContext } from '../../context/PaletteProvider';

import './index.css';

export const AddColor: FC<{ afterAction: () => void }> = ({
  afterAction,
}) => {
  const [color, setColor] = useState('#000000');
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);

  const { palette, addColor } = useContext(PaletteContext);

  const generateValues = () => {
    const colorSplit = color.substring(1).match(/.{2}/g);

    const rgbArr = colorSplit!.map((char) => parseInt(char, 16));
    const rgb = rgbArr?.reduce((acc, num) => `${acc}${num}, `, '');

    return {
      hex: color,
      rgb: `(${rgb.substring(0, rgb.length - 2)})`,
    };
  };

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    setLoading(true);

    const values = generateValues();
    console.log(values);
    const data = {
      values,
      title,
    };

    addColor({ paletteId: palette._id, data }).then(() => {
      setLoading(false);
      afterAction();
    });
  };

  return (
    <form className="add-color" onSubmit={handleSubmit}>
      <h3>Selecione a cor</h3>
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
