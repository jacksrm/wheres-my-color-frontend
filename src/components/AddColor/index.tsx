import { FC, useState } from 'react';
import './index.css';

export const AddColor: FC = () => {
  const [color, setColor] = useState('');

  const generateValues = ()  => {
    const colorSplit = color
      .substring(1)
      .match(/.{2}/g);

      colorSplit?.map()
  }

  console.log(color);
  return (
    <div className="add-color">
      <h3>
        Selecione a cor
      </h3>
      <input
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="color-picker"
        type="color"

      />
    </div>
  );
};
