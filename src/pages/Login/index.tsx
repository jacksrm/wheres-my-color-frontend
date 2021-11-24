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
  const navigate = useNavigate();
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

  const renderSVG = () => (
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
  );

  return (
    <div className="login">
      <div className="login-account">
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
            autoFocus
          />
          <p className="error">{invalidPassword && 'Senha inválida'}</p>

          {loading ? (
            <img className="loading" src={AnimationLoading} alt="logo carregando" />
          ) : (
            <ButtonCustom disabled={loading} type="submit">
              PRONTO
            </ButtonCustom>
          )}
          <Link to="/create">
            <ButtonSimple>
              {' '}
              Não tem uma conta?
              {' '}
              <b>Cadastre-se</b>
            </ButtonSimple>
          </Link>
        </form>
      </div>
      <img className="border-page" src={UnderBarLoginScreen} alt="under bar " />
    </div>
  );
};
