import { AxiosResponse } from 'axios';
import {
  createContext,
  FC,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { wmcApi } from '../api';
import {
  IAddPaletteData,
  IPalette,
  IRemovePalette,
  IUserContext,
} from '../types';
import { LoginContext } from './LoginProvider';

export const UserContext = createContext({} as IUserContext);

export const UserProvider: FC = ({ children }) => {
  const [profilePicture, setProfilePicture] = useState('');
  const [userId, setUserId] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [palettes, setPalettes] = useState<IPalette[]>([]);

  const { token } = useContext(LoginContext);

  const getUserData = useCallback(() => {
    wmcApi
      .get('user/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data: { user } }) => {
        setUserId(user._id);
        setEmail(user.email);
        setUsername(user.username);
        setCreatedAt(user.createdAt);
        setProfilePicture(user.profilePicture);
      });
  }, [token]);

  const getUserPalettes = useCallback(() => {
    wmcApi
      .get('/user/palettes', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }: AxiosResponse) => {
        setPalettes(data.palettes);
      });
  }, [token]);

  const addPalette = useCallback(
    (data: IAddPaletteData) => {
      wmcApi
        .post('/palette/create', data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ status }: AxiosResponse) => {
          if (status === 201) getUserPalettes();
        });
    },
    [getUserPalettes, token],
  );

  const removePalette = useCallback(
    ({ paletteId }: IRemovePalette) => {
      wmcApi
        .delete(`/palette/${paletteId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ status }: AxiosResponse) => {
          if (status === 200) getUserPalettes();
        });
    },
    [getUserPalettes, token],
  );

  const context = useMemo(
    () => ({
      profilePicture,
      userId,
      email,
      username,
      createdAt,
      palettes,
      getUserPalettes,
      addPalette,
      removePalette,
    }),
    [
      createdAt,
      email,
      profilePicture,
      userId,
      username,
      palettes,
      getUserPalettes,
      addPalette,
      removePalette,
    ],
  );

  useEffect(() => {
    if (token) {
      getUserData();
      getUserPalettes();
    } else {
      setProfilePicture('');
      setUserId('');
      setEmail('');
      setUsername('');
      setCreatedAt('');
      setPalettes([]);
    }
  }, [token, getUserData, getUserPalettes]);

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};
