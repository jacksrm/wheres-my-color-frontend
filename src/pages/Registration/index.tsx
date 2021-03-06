import {
  FC, FormEvent, useState,
} from 'react';
import { wmcApi } from 'api';
import { Link } from 'react-router-dom';
import md5 from 'md5';

import { AxiosResponse } from 'axios';
import { SuccessMessage } from 'components/SuccessMessage';
import { ButtonSimple, ButtonCustom } from '../../components/Buttons';

import logo from '../../images/logo.png';
import AnimationLoading from '../../images/LoadingAnimation50.gif';
import sideImg from '../../images/registrationImg.svg';

import './index.css';

const hashEmail = (email: string) => md5(email);

export const Registration: FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleRegister = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    wmcApi
      .post('user/create', {
        username,
        email,
        password,
        profilePicture: `https://www.gravatar.com/avatar/${hashEmail(
          email,
        )}.png?s=100&d=identicon`,
      })
      .then(({ status }: AxiosResponse) => {
        if (status === 201) {
          setSuccess(true);
          setTimeout(() => setSuccess(false), 6000);
          setUsername('');
          setEmail('');
          setPassword('');
        }
      })
      .catch((err) => {
        console.timeLog(err.response.message);
      })
      .finally(() => setLoading(false));
  };

  const displaySuccess = () => {
    if (success) return <SuccessMessage message="Usuário criado com sucesso!" />;

    return <p style={{ position: 'absolute', display: 'none' }} />;
  };

  return (
    <main className="registration">
      <img className="border-page-image" src={sideImg} alt="side" />
      {displaySuccess()}
      <section className="create-account">
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>

        <h2>Criar uma conta</h2>
        <form onSubmit={handleRegister}>
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type="text"
            placeholder="Nome de usuário"
            required
          />
          <input
            onChange={(e) => setEmail(e.target.value.trim().toLowerCase())}
            value={email}
            type="email"
            placeholder="Email"
            required
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Senha"
            required
          />

          {loading ? (
            <img
              className="loading"
              src={AnimationLoading}
              alt="logo carregando"
            />
          ) : (
            <ButtonCustom disabled={loading} type="submit">
              PRONTO
            </ButtonCustom>
          )}

        </form>
        <Link className="link-login" to="/login">
          <ButtonSimple>
            {' '}
            Já tem uma conta?
            {' '}
            <strong>Faça login</strong>
          </ButtonSimple>
        </Link>
      </section>
    </main>
  );
};
