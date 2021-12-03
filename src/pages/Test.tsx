import {
  FC, useContext, useEffect, useState, useRef,
} from 'react';
import { useCheckRightClick } from '../hooks/useCheckRightClick';
import { useCheckCLickOutside } from '../hooks/useCheckCLickOutside';

export const Test: FC = () => {
  const [rightClick, setRightClick] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  useCheckRightClick(buttonRef, (rightClicked: boolean) => {
    if (rightClicked) {
      console.log('botão direito clicado!');
    }
  });

  useCheckCLickOutside(menuRef, (outsideClick: boolean) => {
    setShowMenu(outsideClick);
  });

  const contextMenu = () => {
    if (rightClick) return <p>teste</p>;

    return <p style={{ position: 'absolute', display: 'none' }} />;
  };

  return (
    <div>
      <button type="button" ref={buttonRef} onContextMenu={() => { setRightClick(true); setShowMenu(false); }}>aqui</button>
      <div ref={menuRef} style={{ visibility: showMenu ? 'hidden' : 'visible' }}>
        {contextMenu()}
      </div>
    </div>
  );
};
