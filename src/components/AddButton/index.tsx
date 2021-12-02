import { FC, MouseEvent } from 'react';
import { FiPlus } from 'react-icons/fi';

import './index.css';

interface IAddButtonProps {
  type: 'square' | 'circle';
  onClick?: (ev: MouseEvent<HTMLButtonElement>) => void;
}

export const AddButton: FC<IAddButtonProps> = ({ type, onClick }) => (
  <button onClick={onClick} className={`add-btn ${type}`} type="button">
    <FiPlus />
  </button>
);
