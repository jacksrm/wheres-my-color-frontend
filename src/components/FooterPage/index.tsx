import { FC } from 'react';

import './index.css';

export const FooterPage: FC = () => {
  return (
    <div>
      <footer className="footer">
        <div className="About">
          <h6>About</h6>
          <p className="text-justify">
            Projeto desenvolvido na{' '}
            <a href="https://www.unifor.br/">Universidade de Fortaleza</a> por{' '}
            <a href="http://">Jacson Rodrigues</a>,{' '}
            <a href="http://">Emanuelle Neves</a> e{' '}
            <a href="http://">Matheus Rodrigues</a>.
          </p>
        </div>

        <div className="copyright">
          <p className="copyright-text">
            Copyright &copy; 2021 All Rights Reserved by
            <br />
            <a href="http://">Where’s My Collor? Project</a>.
          </p>
        </div>
      </footer>
    </div>
  );
};
