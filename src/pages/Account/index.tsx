import { FC } from 'react';
import { ButtonCustom } from '../../components/Buttons';
import './index.css';

export const Account: FC = () => {
  return (
    <div>
      {/* Implementar troca de imagens de perfil */}
      <div className="profile"></div>

      <div className="account">
        <p className="title">Configurações</p>
        {/* Os campos precisam está preenchidos com os dados do usuário logado */}
        <form action="/" method="">
          <input type="text" name="" placeholder="Nome" required autoFocus />
          <input type="email" name="" placeholder="Email" required autoFocus />
          <input
            type="password"
            name=""
            placeholder="Senha"
            required
            autoFocus
          />
          <input
            type="password"
            name=""
            placeholder="Confirmar senha"
            required
            autoFocus
          />

          <div className="btn">
            <ButtonCustom>ALTERAR</ButtonCustom>
          </div>
        </form>
      </div>

      <svg
        className="border-page"
        viewBox="0 0 1921 83"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect x="0.659668" y="0.366211" width="82"  height="82" fill="#181818" />
        <rect x="1532.66"  y="0.366211" width="82"  height="82" fill="#181818" />
        <rect x="263.015"  y="0.366211" width="82"  height="82" fill="#545454" />
        <rect x="374.66"   y="0.366211" width="82"  height="82" fill="#737373" />
        <rect x="830.66"   y="0.366211" width="82"  height="82" fill="#181818" />
        <rect x="912.66"   y="0.366211" width="82"  height="82" fill="#737373" />
        <rect x="456.66"   y="0.366211" width="82"  height="82" fill="#181818" />
        <rect x="994.66"   y="0.366211" width="246" height="82" fill="#181818" />
        <rect x="538.66"   y="0.366211" width="292" height="82" fill="#545454" />
        <rect x="1240.66"  y="0.366211" width="292" height="82" fill="#545454" />
        <rect x="82.6597"  y="0.366211" width="292" height="82" fill="#181818" />
        <rect x="1614.66"  y="0.366211" width="306" height="82" fill="#181818" />
      </svg>
    </div>
  );
};
