import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ButtonSimple, ButtonCustom } from '../../components/Buttons';
import { FooterPage } from '../../components/FooterPage/index';
import illustration from '../../images/Group2042.svg';
import logo from '../../images/logo.png';

import './index.css';

export const Initial: FC = () => (
  <main className="Initial">
    <section className="presentation">
      <div className="content">
        <img className="logo" src={logo} alt="logo" />
        <h1>Where’s My Collor?</h1>
        <p>
          A melhor maneira de guardar as suas paletas de cores de forma rápida e
          prática.
        </p>
        <Link to="/login">
          <ButtonCustom>LOGIN</ButtonCustom>
        </Link>
        <Link to="/create">
          <ButtonSimple className="create">
            Não tem conta?
            {' '}
            <strong>Cadastre-se</strong>
          </ButtonSimple>
        </Link>
      </div>
      <img className="image" src={illustration} alt="illustration" />
    </section>

    {/* criar componente container com slide sobre o projeto */}

    <FooterPage />
  </main>
);
