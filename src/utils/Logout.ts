import { remove } from './LocalStorage';

export const Logout = async (token: string) => {
  const authenticated = () => localStorage.getItem(token) !== null;

  if (authenticated()) {
    remove(token);
    console.log('logout successfully completed');
  }
};
