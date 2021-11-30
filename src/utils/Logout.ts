import { remove } from './LocalStorage';

export const Logout = async (token: string, email: string) => {
  const authenticated = () => localStorage.getItem(token) !== null;

  if (authenticated()) {
    remove(token);
    remove(email);
    window.localStorage.clear();
    console.log('logout successfully completed');
  }
};
