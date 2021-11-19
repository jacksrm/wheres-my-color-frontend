import { FC, createContext  } from 'react';

interface ILoginContext {
  userId: string;
  email: string;
  token: string;
}

export const LoginContext = createContext({} as ILoginContext);

export function LoginProvider({ children }) {
  return (
    <LoginContext.Provider value={{}}>

    </LoginContext.Provider>
  )
};
