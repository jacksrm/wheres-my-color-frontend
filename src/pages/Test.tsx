import {
  FC, useContext, useEffect, useState,
} from 'react';
import { UserContext } from '../context/UserProvider';
import animation from '../images/AnimationShake.png';

export const Test: FC = () => {
  const [message, setMessage] = useState(<span />);
  const {
    createdAt,
    email,
    profilePicture,
    userId,
    username,
  } = useContext(UserContext);
  useEffect(() => {
    setMessage(<span>Cadastrado com sucesso!</span>);
  }, []);
  return (
    <div>
      <img src={profilePicture} alt="Foto de Perfil" />
      <p>{createdAt}</p>
      <p>{email}</p>
      <p>{userId}</p>
      <p>{username}</p>
      <img src={animation} alt="" />
      {message}
    </div>
  );
};
