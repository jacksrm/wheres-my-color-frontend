import {
  createContext,
  FC,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { wmcApi } from '../api';
import { IUserContext } from '../types';
import { LoginContext } from './LoginProvider';

export const UserContext = createContext({} as IUserContext);

export const UserProvider: FC = ({ children }) => {
  const [profilePicture, setProfilePicture] = useState('');
  const [userId, setUserId] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [createdAt, setCreatedAt] = useState('');

  const { token } = useContext(LoginContext);

  const context = useMemo<IUserContext>(
    () => ({
      profilePicture,
      userId,
      email,
      username,
      createdAt,
    }),
    [profilePicture, userId, email, username, createdAt],
  );

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
          setProfilePicture(user.profilePicture);
        });
    }
  }, [token]);

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};
