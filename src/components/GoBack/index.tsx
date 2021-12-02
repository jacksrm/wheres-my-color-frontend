import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import './index.css';

export const GoBack: FC = () => {
  const navigate = useNavigate();

  return (
    <button className="go-back" onClick={() => navigate(-1)} type="button">
      <FiChevronLeft />
    </button>
  );
};
