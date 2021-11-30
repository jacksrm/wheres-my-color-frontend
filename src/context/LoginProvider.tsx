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
    save('email', email);
    save('password', password);
    setToken(response.data.token);

    console.log(localStorage.getItem(email));
    console.log(localStorage.getItem(password));
  };
  save('token', token);

  const context = useMemo(() => ({
    token,
    logIn,
  }), [token]);

  return (
    <LoginContext.Provider value={context}>{children}</LoginContext.Provider>
  );
};
