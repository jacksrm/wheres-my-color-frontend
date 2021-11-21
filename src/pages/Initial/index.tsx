import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ButtonSimple, ButtonCustom } from '../../components/Buttons';
import { FooterPage } from '../../components/FooterPage/index';
import illustration from '../../images/Group 2042.svg';

import './index.css';

export const Initial: FC = () => (
  <div>
    <div className="navbar">
      <h2 className="Title">Where’s My Collor?</h2>
    </div>

    <div className="image-container">
      <img className="image" src={illustration} alt="illustration" />
    </div>

    <p className="Apresentation">
      A melhor maneira de guardar as suas paletas de cores de forma rápida e
      prática.
    </p>

    <Link to="/login">
      <ButtonCustom type="submit">LOGIN</ButtonCustom>
    </Link>
    <Link to="/create">
      <ButtonSimple type="submit">
        Não tem conta?
        {' '}
        <b>Cadastre-se</b>
      </ButtonSimple>
    </Link>

    <p className="border-div" />

    {/* criar componente container com slide sobre o projeto talvez */}

    <FooterPage />
  </div>
);
