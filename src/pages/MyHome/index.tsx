import {
  FC, useContext, useEffect, useState,
} from 'react';
import { useParams } from 'react-router-dom';
import { wmcApi } from '../../api';
import { LoginContext } from '../../context/LoginProvider';
import { UserContext } from '../../context/UserProvider';
import { Header } from '../../components/Header';
import { Loading } from '../../components/Loading';
import { PalettePreview } from '../../components/PalettePreview';

import { IUserWithPalettes } from '../../types';

import './index.css';

export const MyHome: FC = () => {
  const [displayUser, setDisplayUser] = useState<IUserWithPalettes>({
    _id: '',
    createdAt: '',
    palettes: [],
    profilePicture: '',
    username: '',
  });

  const [loading, setLoading] = useState(true);

  const { username } = useParams();
  const {
    username: loggedUsername,
    createdAt,
    profilePicture,
    userId,
  } = useContext(UserContext);
  const { token } = useContext(LoginContext);

  useEffect(() => {
    if (username !== loggedUsername) {
      wmcApi
        .get('')
        .then(({ data }) => {
          console.log(username, data);
          const tmp = data.find(
            (user: IUserWithPalettes) => user.username === username,
          );
          if (tmp) {
            setDisplayUser(tmp);
          }
        })
        .finally(() => setLoading(false));
    } else {
      wmcApi
        .get('/user/palettes', {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(({ data }) => {
          setDisplayUser({
            username: loggedUsername,
            createdAt,
            profilePicture,
            _id: userId,
            palettes: data.palettes,
          });
        })
        .finally(() => setLoading(false));
    }
  }, [username, loggedUsername, createdAt, profilePicture, token, userId]);

  const renderPalettes = () => {
    if (!displayUser.username) {
      return (
        <section className="palettes">
          <p>Usuário não encontrado.</p>
        </section>
      );
    }
    if (displayUser.palettes.length === 0) {
      return (
        <section className="palettes">
          <p>{`${displayUser.username} não possui paletas.`}</p>
        </section>
      );
    }
    console.log(displayUser);
    return (
      <section className="palettes">
        <ul>
          {displayUser.palettes.map((palette) => (
            <PalettePreview
              paletteId={palette._id}
              key={palette._id}
              colors={palette.colors}
              title={palette.name}
            />
          ))}
        </ul>
      </section>
    );
  };

  if (loading) {
    return (
      <main className="my-home">
        <Header />
        <Loading size={100} />
      </main>
    );
  }

  return (
    <main className="my-home">
      <Header />
      {renderPalettes()}
    </main>
  );
};
