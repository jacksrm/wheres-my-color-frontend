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
  const { username } = useContext(UserContext);
  const [hideMenu, setHideMenu] = useState(true);
  const menuRef = useRef(null);

  const navigate = useNavigate();

  useCheckCLickOutside(menuRef, (outsideClick: boolean) => {
    setHideMenu(outsideClick);
  });

  const logout = () => {
    Logout('token');

    if (localStorage.getItem('token') == null) {
      navigate('/login');
      document.location.reload();
    }
  };
  return (
    <header className="header">
      <Link to={`/${username}`}>
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
              onClick={logout}
            >
              Sair
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};
