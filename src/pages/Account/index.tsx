import {
  FC,
  FormEvent,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';

import { Logout } from 'utils/Logout';
import { wmcApi } from '../../api';

import { UserContext } from '../../context/UserProvider';

import { SuccessMessage } from '../../components/SuccessMessage';
import { Loading } from '../../components/Loading';
import { ImageProfile } from '../../components/ImageProfile';
import { ButtonCustom } from '../../components/Buttons';
import { EditInput } from '../../components/EditInput';
import { GoBack } from '../../components/GoBack';

import { LoginContext } from '../../context/LoginProvider';

import './index.css';

export const Account: FC = () => {
  const { email, username, userId } = useContext(UserContext);
  const { token, logOut } = useContext(LoginContext);
  const navigate = useNavigate();

  const [editEmail, setEditEmail] = useState(email);
  const [editUsername, setEditUsername] = useState(username);
  const [editPassword, setEditPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!token || !userId) {
      navigate('/login');
    }
  }, [navigate, token, userId]);

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    setLoading(true);

    const data = {
      email: editEmail || undefined,
      username: editUsername || undefined,
      password: editPassword || undefined,
    };

    if (!editEmail || editEmail === email) delete data.email;
    if (!editUsername || editUsername === username) delete data.username;
    if (!editPassword) delete data.password;

    if (Object.keys(data).length > 0) {
      wmcApi
        .put('/user/profile', data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data: responseData }) => {
          setSuccess(true);
          setMessage(responseData.message);
          Logout(token).then(() => {
            logOut();
            navigate('/login');
          });
          // ;
        })
        .catch((err) => {
          console.log(err.response.message);
        })
        .finally(() => setLoading(false));
    }
  };

  return (
    <main className="account-main">
      <GoBack />
      <div className="account">
        <ImageProfile />
        <h2 className="title">Configurações</h2>
        {success && (
          <SuccessMessage animation="ripple" message={message} />
        )}
        <form onSubmit={handleSubmit}>
          <EditInput
            placeholder="Email"
            required={false}
            type="text"
            value={editEmail}
            onChange={(ev) => setEditEmail(ev.target.value)}
          />
          <EditInput
            placeholder="Username"
            required={false}
            type="text"
            value={editUsername}
            onChange={(ev) => setEditUsername(ev.target.value)}
          />
          <EditInput
            placeholder="Senha"
            required={false}
            type="password"
            value={editPassword}
            onChange={(ev) => setEditPassword(ev.target.value)}
          />

          {loading ? (
            <Loading size={50} />
          ) : (
            <ButtonCustom className="btn-submit" type="submit">
              ALTERAR
            </ButtonCustom>
          )}
        </form>
      </div>

      <svg
        className="border-page"
        viewBox="0 0 1921 83"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0.659668" y="0.366211" width="82" height="82" fill="#181818" />
        <rect x="1532.66" y="0.366211" width="82" height="82" fill="#181818" />
        <rect x="263.015" y="0.366211" width="82" height="82" fill="#545454" />
        <rect x="374.66" y="0.366211" width="82" height="82" fill="#737373" />
        <rect x="830.66" y="0.366211" width="82" height="82" fill="#181818" />
        <rect x="912.66" y="0.366211" width="82" height="82" fill="#737373" />
        <rect x="456.66" y="0.366211" width="82" height="82" fill="#181818" />
        <rect x="994.66" y="0.366211" width="246" height="82" fill="#181818" />
        <rect x="538.66" y="0.366211" width="292" height="82" fill="#545454" />
        <rect x="1240.66" y="0.366211" width="292" height="82" fill="#545454" />
        <rect x="82.6597" y="0.366211" width="292" height="82" fill="#181818" />
        <rect x="1614.66" y="0.366211" width="306" height="82" fill="#181818" />
      </svg>
    </main>
  );
};
