import {
  FC, useContext, useEffect, useState,
} from 'react';
import { useParams } from 'react-router-dom';

import { wmcApi } from '../../api';

import { LoginContext } from '../../context/LoginProvider';
import { UserContext } from '../../context/UserProvider';
import { PaletteProvider } from '../../context/PaletteProvider';

import { Header } from '../../components/Header';
import { Loading } from '../../components/Loading';
import { PalettePreview } from '../../components/PalettePreview';
import { AddButton } from '../../components/AddButton';
import { AddPalette } from '../../components/AddPalette';
import { OverlayContainer } from '../../components/OverlayContainer';

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
  const [showAddPalette, setShowAddPalette] = useState(false);

  const { username } = useParams();
  const {
    username: loggedUsername,
    createdAt,
    profilePicture,
    userId,
    palettes,
    addPalette,
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
      setDisplayUser({
        username: loggedUsername,
        createdAt,
        profilePicture,
        _id: userId,
        palettes,
      });
      setLoading(false);
    }
  }, [username, loggedUsername, createdAt, profilePicture, token, userId, palettes]);

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
            <PaletteProvider key={palette._id} palette={palette}>
              <PalettePreview
                showAdd={loggedUsername === username}
                showEdit={loggedUsername === username}
                showDelete={loggedUsername === username}
                key={palette._id}
              />
            </PaletteProvider>
          ))}
        </ul>
      </section>
    );
  };

  if (loading) {
    return (
      <main className="my-home">
        <Header />
        <Loading distanceHeader size={100} />
      </main>
    );
  }

  return (
    <main className="my-home">
      <Header />
      {renderPalettes()}
      {showAddPalette && (
        <OverlayContainer handle={() => setShowAddPalette(false)}>
          <AddPalette handleAddPalette={addPalette} />
        </OverlayContainer>
      )}
      {loggedUsername === username && (
        <AddButton onClick={() => setShowAddPalette(true)} type="circle" />
      )}
    </main>
  );
};
