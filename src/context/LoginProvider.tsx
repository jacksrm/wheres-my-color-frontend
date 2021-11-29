import {
  createContext, FC, useMemo, useState,
} from 'react';
import { wmcApi } from '../api';
import { ILoginContext, ILoginData } from '../types';
import { save, remove } from '../utils/LocalStorage';

export const LoginContext = createContext({} as ILoginContext);

export const LoginProvider: FC = ({ children }) => {
  const [token, setToken] = useState('');

  const logIn = async ({ email, password }: ILoginData) => {
    const response = await wmcApi.post('login', { email, password });
    save('email', email);
    save('password', password);
    setToken(response.data.token);

    console.log(localStorage.getItem(email));
    console.log(localStorage.getItem(password));
  };
  save('token', token);
  console.log(localStorage.getItem(token));

  const authenticated = () => localStorage.getItem(token) !== null;

  const logout = async () => {
    if (authenticated()) {
      localStorage.removeItem(token);
      console.log('removido', localStorage.getItem(token));
    }
  };

  const context = useMemo(() => ({
    token,
    logIn,
  }), [token]);

  return (
    <LoginContext.Provider value={context}>{children}</LoginContext.Provider>
  );
};
