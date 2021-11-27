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
import sideImg from '../../images/registrationImg.png';
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

  // const renderSVG = () => (
  //   <svg
  //     viewBox="111.837 64.357 215.708 377.971"
  //     width="215.708"
  //     height="377.971"
  //   >
  //     <defs>
  //       <filter
  //         id="morphology-filter-0"
  //         data-bx-preset="morphology 1 dilate 4"
  //         x="-500%"
  //         y="-500%"
  //         width="1000%"
  //         height="1000%"
  //       >
  //         <feMorphology operator="dilate" radius="4" />
  //       </filter>
  //     </defs>
  //     <path
  //       fillrule="evenodd"
  //       cliprule="evenodd"
  //       fill="#181818"
  //       style={{ filter: 'url(#morphology-filter-0)' }}
  //     />
  //   </svg>
  // );
  return (
    <main className="registration">
      <img className="border-page-image" src={sideImg} alt="side" />

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

          <Link className="link-login" to="/login">
            <ButtonSimple>
              {' '}
              Já tem uma conta?
              {' '}
              <strong>Faça login</strong>
            </ButtonSimple>
          </Link>

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
      </section>
    </main>
  );
};
