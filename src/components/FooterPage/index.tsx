import { FC } from 'react';

import './index.css';

export const FooterPage: FC = () => (
  <footer className="footer">
    <section className="about">
      <h6>Sobre</h6>
      <p className="text-justify">
        Projeto desenvolvido na
        {' '}
        <a href="https://www.unifor.br/">Universidade de Fortaleza</a>
        {' '}
        por
        {' '}
        <a href="http://">Jacson Rodrigues</a>
        ,
        {' '}
        <a href="http://">Emanuelle Neves</a>
        {' '}
        e
        {' '}
        <a href="http://">Matheus Rodrigues</a>
        .
      </p>
    </section>

    <p className="copyright">
      Copyright &copy; 2021 All Rights Reserved by
      {' '}
      <a href="http://">Where’s My Collor? Project</a>
      .
    </p>
  </footer>
);
