import {
  FC, useContext, useEffect, useState, useRef,
} from 'react';
import { useCheckRightClick } from '../hooks/useCheckRightClick';

export const Test: FC = () => {
  const [rightClick, setRightClick] = useState(false);
  const menuRightClick = useRef(null);

  useCheckRightClick(menuRightClick, (RightClick: boolean) => {
    if (rightClick) {
      setRightClick(RightClick);
      console.log('botão direito clicado!');
    }
  });

  return (
    <div>
      <button type="button" ref={menuRightClick} onContextMenu={() => setRightClick(true)}> aqui </button>
    </div>
  );
};
