import {
  FC, useState, useContext, useRef,
} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../Buttons';
import { UserContext } from '../../context/UserProvider';
import { LoginContext } from '../../context/LoginProvider';
import { ImageProfile } from '../ImageProfile';
import { useCheckCLickOutside } from '../../hooks/useCheckCLickOutside';
import { Logout } from '../../utils/Logout';

import logo from '../../images/logo.png';

import './index.css';

export const Header: FC = () => {
  const { username, email } = useContext(UserContext);
  const { token } = useContext(LoginContext);
  const [hideMenu, setHideMenu] = useState(true);
  const menuRef = useRef(null);

  const navigate = useNavigate();

  useCheckCLickOutside(menuRef, (outsideClick: boolean) => {
    setHideMenu(outsideClick);
  });

  return (
    <header className="header">
      <Link to="/MyHome">
        <img src={logo} alt="logo" />
      </Link>

      <h1>WHERE’S MY COLOR?</h1>

      <Button onClick={() => setHideMenu(false)}>
        <ImageProfile />
      </Button>

      <div
        ref={menuRef}
        style={{ visibility: hideMenu ? 'hidden' : 'visible' }}
        id="menu"
        className="menu"
      >
        <p className="nameUser">
          Olá
          {` ${username}`}
        </p>

        <ul>
          <li>
            <Link to="/Account">Configurações</Link>
          </li>
          <li>
            <button
              className="sair"
              type="button"
              onClick={() => {
                Logout(token, email);

                const logout = () => localStorage.getItem(token) == null;
                if (logout()) {
                  navigate('/login');
                }
              }}
            >
              Sair
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};
