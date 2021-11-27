import {
  FC, FormEvent, useContext, useState,
} from 'react';
import { wmcApi } from 'api';
import { LoginContext } from 'context/LoginProvider';
import { Link, useNavigate } from 'react-router-dom';
import md5 from 'md5';

import { ButtonSimple, ButtonCustom } from '../../components/Buttons';

import logo from '../../images/logo.png';
import AnimationLoading from '../../images/LoadingAnimation50.gif';

import './index.css';

const hashEmail = (email: string) => md5(email);

export const Registration: FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { logIn } = useContext(LoginContext);
  const navigate = useNavigate();

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
      .then(() => logIn({ email, password }))
      .finally(() => {
        setLoading(false);
        navigate('/MyHome');
      });
  };

  const renderSVG = () => (
    <svg
      width="618"
      height="1081"
      viewBox="0 0 618 1081"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M369.599 0.19043H0.659668V115.216V195.69V867.69V884.69V927.165V1040.19V1080.19H369.599V1040.19H371.015V867.69H370.909V799.883C431.749 796.547 491.66 771.82 538.413 725.629C589.551 675.107 615.203 608.535 615.272 541.912L615.457 541.913L617.016 284.465L370.909 282.975V115.216H369.599V0.19043ZM370.909 282.975L359.568 282.906L359.567 283.048C292.934 282.299 226.039 307.143 174.89 357.676C73.2822 458.06 72.2905 621.807 172.675 723.414C226.868 778.268 299.528 803.798 370.909 799.883V282.975Z"
        fill="#181818"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M372.752 691.129C403.52 687.025 433.292 673.806 457.456 651.376C488.144 622.889 503.939 584.974 504.629 546.798L504.737 546.8L508.166 399.288L369.599 396.341L372.752 691.129Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M372.718 395.892C283.699 395.893 211.535 461.984 211.535 543.511C211.535 625.038 283.699 691.129 372.718 691.13V395.892Z"
        fill="#1567E3"
      />
      <rect
        x="203.015"
        y="0.19043"
        width="167.584"
        height="280.5"
        fill="#181818"
      />
    </svg>
  );
  return (
    <main>
      <div className="border-page-image">{renderSVG()}</div>

      <section className="create-account">
        <Link to="/">
          <img className="image-logo-create" src={logo} alt="logo" />
        </Link>

        <p className="title-create">Criar uma conta</p>
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
              {loading ? 'CARREGANDO' : 'PRONTO'}
            </ButtonCustom>
          )}
          <Link to="/login">
            <ButtonSimple>
              {' '}
              Já tem uma conta?
              {' '}
              <strong>Faça login</strong>
            </ButtonSimple>
          </Link>
        </form>
      </section>
    </main>
  );
};
