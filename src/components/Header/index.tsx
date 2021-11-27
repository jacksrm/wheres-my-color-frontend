import {
  FC, useState, useContext, useRef,
} from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Buttons';
import { UserContext } from '../../context/UserProvider';
import { ImageProfile } from '../ImageProfile';
import { useCheckCLickOutside } from '../../hooks/useCheckCLickOutside';

import logo from '../../images/logo.png';

import './index.css';

export const Header: FC = () => {
  const { username } = useContext(UserContext);
  const [hideMenu, setHideMenu] = useState(true);
  const menuRef = useRef(null);
  // const navigate = useNavigate();
  // const { token } = useContext(LoginContext);

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
                console.log('logout');
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
