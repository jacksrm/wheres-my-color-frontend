import { FC } from 'react';

import { Header } from '../../components/Header';

import './index.css';

export const NotFound: FC = () => (
  <main className="not-found">
    <Header />
    <div className="content">
      <h1>Não encontramos o conteúdo selecionado!</h1>
    </div>
  </main>
);
