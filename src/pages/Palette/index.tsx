import { wmcApi } from 'api';
import {
  FC, useContext, useEffect, useState,
} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AxiosResponse, AxiosError } from 'axios';

import { PaletteProvider } from 'context/PaletteProvider';
import { LoginContext } from '../../context/LoginProvider';

import { Loading } from '../../components/Loading';
import { ColorsGallery } from '../../components/ColorsGallery';
import { Header } from '../../components/Header';
import { GoBack } from '../../components/GoBack';

import { IPalette } from '../../types';

import './index.css';

export const Palette: FC = () => {
  const [palette, setPalette] = useState<IPalette>({} as IPalette);
  const [loading, setLoading] = useState(false);

  const { paletteId } = useParams();
  const { token } = useContext(LoginContext);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    if (token) {
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
  }, [paletteId, token, navigate]);

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
