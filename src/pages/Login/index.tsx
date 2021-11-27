import {
  FC, FormEvent, useContext, useEffect, useState,
} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from 'context/UserProvider';
import { LoginContext } from '../../context/LoginProvider';
import { ButtonSimple, ButtonCustom } from '../../components/Buttons';
import { Loading } from '../../components/Loading';
import logo from '../../images/logo.png';
import AnimationLoading from '../../images/LoadingAnimation50.gif';
import UnderBarLoginScreen from '../../images/UnderBarLoginScreen.png';

import './index.css';

export const Login: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [defaultError, setDefaultError] = useState('');
  const [loading, setLoading] = useState(false);

  const { logIn } = useContext(LoginContext);
  const { username } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setInvalidEmail(false);
    setInvalidPassword(false);
    setDefaultError('');

    logIn({ email, password })
      .catch((error) => {
        switch (error.response.data.message) {
          case 'Theres no user with this email!':
            return setInvalidEmail(true);
          case 'Incorrect password!':
            return setInvalidPassword(true);
          default:
            return setDefaultError(error.response.data.message);
        }
      });
  };

  useEffect(() => {
    if (username) {
      navigate(`/${username}`);
      setLoading(false);
    }
  }, [username, navigate]);

  return (
    <main className="login">
      <section className="login-account">
        <Link to="/">
          {' '}
          <img className="image-logo-login" src={logo} alt="logo" />
          {' '}
        </Link>
        <p className="title-login">Login</p>

        <form onSubmit={handleLogin}>
          {defaultError && <p className="error">{defaultError}</p>}
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Email"
            required
          />
          <p className="error">{invalidEmail && 'Email inválido'}</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Senha"
            required
          />
          <p className="error">{invalidPassword && 'Senha inválida'}</p>

          {loading ? (
            <Loading size={50} />
          ) : (
            <ButtonCustom className="btn-login" disabled={loading} type="submit">
              PRONTO
            </ButtonCustom>
          )}
          <Link to="/create">
            <ButtonSimple>
              {' '}
              Não tem uma conta?
              {' '}
              <strong>Cadastre-se</strong>
            </ButtonSimple>
          </Link>
        </form>
      </section>
      <img className="border-page" src={UnderBarLoginScreen} alt="under bar " />
    </main>
  );
};
