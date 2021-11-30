import { FC } from 'react';
import { FiPlus } from 'react-icons/fi';

import './index.css';

export const AddButton: FC = (props) => (
  <button className="add-btn" type="button">
    <FiPlus />
  </button>
);
