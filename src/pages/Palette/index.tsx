import { wmcApi } from 'api';
import {
  FC, useContext, useEffect, useState,
} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AxiosResponse, AxiosError } from 'axios';

import { LoginContext } from '../../context/LoginProvider';

import { Loading } from '../../components/Loading';

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
  }, [paletteId, token, navigate]);

  if (loading) {
    return (
      <main className="palette">
        <Loading size={100} />
      </main>
    );
  }

  return (
    <main>
      <h1>{palette.name}</h1>
    </main>
  );
};
