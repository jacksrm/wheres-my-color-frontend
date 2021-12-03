import { wmcApi } from 'api';
import {
  FC, useContext, useEffect, useState,
} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AxiosResponse, AxiosError } from 'axios';

import { PaletteProvider } from 'context/PaletteProvider';
import { LoginContext } from '../../context/LoginProvider';
import { UserContext } from '../../context/UserProvider';

import { Loading } from '../../components/Loading';
import { ColorsGallery } from '../../components/ColorsGallery';
import { Header } from '../../components/Header';
import { GoBack } from '../../components/GoBack';

import { IPalette } from '../../types';

import './index.css';

export const Palette: FC = () => {
  const [palette, setPalette] = useState<IPalette>({} as IPalette);
  const [loading, setLoading] = useState(false);

  const { paletteId, username } = useParams();
  const { token } = useContext(LoginContext);
  const { username: loggedUsername } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    if (username === loggedUsername) {
      wmcApi
        .get(`/palette/${paletteId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }: AxiosResponse) => setPalette(data.palette))
        .catch((err: AxiosError) => {
          if (err.response?.status === 401) {
            navigate('/login');
          }
        })
        .finally(() => setLoading(false));
    } else {
      wmcApi
        .get(`/palette/public/${paletteId}`)
        .then(({ data }: AxiosResponse) => setPalette(data.palette))
        .catch((err: AxiosError) => {
          if (err.response?.status === 404) {
            navigate('/NotFound');
          }
        })
        .finally(() => setLoading(false));
    }
  }, [paletteId, token, navigate, loggedUsername, username]);

  if (loading) {
    return (
      <main className="palette">
        <Header />
        <Loading size={100} />
      </main>
    );
  }

  console.log(palette.colors);
  return (
    <main className="palette">
      <Header />
      <GoBack />
      <h1 className="palette-name">{palette.name}</h1>
      <PaletteProvider palette={palette}>
        <ColorsGallery center />
      </PaletteProvider>
    </main>
  );
};
