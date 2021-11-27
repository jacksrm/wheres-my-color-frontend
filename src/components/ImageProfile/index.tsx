import {
  FC, useContext,
} from 'react';
import { UserContext } from '../../context/UserProvider';

import './index.css';

export const ImageProfile: FC = () => {
  const { profilePicture } = useContext(UserContext);
  return (
    <img className="profile" src={profilePicture} alt="Foto de Perfil" />
  );
};
