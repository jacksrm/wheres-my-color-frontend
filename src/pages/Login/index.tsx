import {
  FC, FormEvent, useContext, useState,
} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ButtonSimple, ButtonCustom } from '../../components/Buttons';
import { LoginContext } from '../../context/LoginProvider';
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
  const navigate = useNavigate();

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setInvalidEmail(false);
    setInvalidPassword(false);
    setDefaultError('');

    logIn({ email, password })
      .then(() => {
        navigate('/MyHome');
      })
      .catch((error) => {
        switch (error.response.data.message) {
          case 'Theres no user with this email!':
            return setInvalidEmail(true);
          case 'Incorrect password!':
            return setInvalidPassword(true);
          default:
            return setDefaultError(error.response.data.message);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

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
            <img
              className="loading"
              src={AnimationLoading}
              alt="logo carregando"
            />
          ) : (
            <ButtonCustom disabled={loading} type="submit">
              {loading ? 'CARREGANDO' : 'PRONTO'}
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
