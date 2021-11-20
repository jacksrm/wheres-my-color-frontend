import { createContext, FC, useEffect, useState } from 'react';
import { wmcApi } from '../api';
import { ILoginContext, ILoginData } from '../types';

export const LoginContext = createContext({} as ILoginContext);

export const LoginProvider: FC = ({ children }) => {
  const [userId, setUserId] = useState('');
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [username, setUsername] = useState('');
  const [createdAt, setCreatedAt] = useState('');

  const logIn = async ({ email, password }: ILoginData) => {
    const response = await wmcApi.post('login', { email, password });
    setToken(response.data.token);
  };

  const context = {
    userId,
    email,
    token,
    username,
    createdAt,
    logIn,
  };

  useEffect(() => {
    if (token) {
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
        });
    }
  }, [token]);

  return (
    <LoginContext.Provider value={context}>
      {children}
    </LoginContext.Provider>
  );
};
