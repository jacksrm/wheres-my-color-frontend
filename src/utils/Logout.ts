import { remove } from './LocalStorage';

type TLogoutFunc = (token: string) => Promise<void>;

export const Logout: TLogoutFunc = async (token: string) => {
  const authenticated = () => localStorage.getItem(token) !== null;

  if (authenticated()) {
    remove(token);
    console.log('logout successfully completed');
  }
};
