import { FC, useContext } from 'react';
import { UserContext } from '../context/UserProvider';

export const Test: FC = () => {
  const {
    createdAt,
    email,
    profilePicture,
    userId,
    username,
  } = useContext(UserContext);
  return (
    <div>
      <img src={profilePicture} alt="Foto de Perfil" />
      <p>{createdAt}</p>
      <p>{email}</p>
      <p>{userId}</p>
      <p>{username}</p>
    </div>
  );
};
