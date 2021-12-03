import {
  createContext, FC, useMemo, useState,
} from 'react';
import { wmcApi } from '../api';
import { ILoginContext, ILoginData } from '../types';
import { save } from '../utils/LocalStorage';

export const LoginContext = createContext({} as ILoginContext);

export const LoginProvider: FC = ({ children }) => {
  const [token, setToken] = useState('');

  const logIn = async ({ email, password }: ILoginData) => {
    const response = await wmcApi.post('login', { email, password });
    setToken(response.data.token);
  };

  const logOut = () => {
    setToken('');
  };

  save('token', token);

  const context = useMemo(() => ({
    token,
    logIn,
    logOut,
  }), [token]);

  return (
    <LoginContext.Provider value={context}>{children}</LoginContext.Provider>
  );
};
