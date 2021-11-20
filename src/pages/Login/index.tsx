import { FC, FormEvent, useContext, useState } from 'react';
import { ButtonSimple, ButtonCustom } from '../../components/Buttons';
import { LoginContext } from '../../context/LoginProvider';
import logo from '../../images/logo.png';

import './index.css';

export const Login: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<string[]>([]);
  const { logIn } = useContext(LoginContext);

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await logIn({ email, password });
    } catch (error) {
      if (error.response) {
        setErrors((prev) => [...prev, error.response.data.message]);
      }
    }
  };

  return (
    <div>
      <a href="http://localhost:3000/"> <img className="image-logo-login" src={logo} alt="logo" /> </a>
      
      <div className="login-account">
        <p className="title-login">Login</p>

        <form onSubmit={handleLogin}>
          {errors.map((error) => (
            <p>{error}</p>
          ))}
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            required
            autoFocus
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Senha"
            required
          />

          <div className="btn">
            <ButtonCustom type="submit">PRONTO</ButtonCustom>
            <Link to="/create">
              <ButtonSimple> Não tem uma conta? <b>Cadastre-se</b></ButtonSimple>
            </Link>
          </div>
        </form>
      </div>
      <svg
        className="border-page"
        viewBox="0 0 1921 83"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
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
    </div>
  );
};
