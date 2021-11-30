import {
  FC, useContext, useEffect, useState, useRef,
} from 'react';
import { useCheckRightClick } from '../hooks/useCheckRightClick';
import { SuccessMessage } from '../components/SuccessMessage';

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
      <SuccessMessage animation="shake" message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, similique quos quas sit nesciunt, maxime aperiam in, explicabo dolorum cum consectetur deleniti neque placeat vitae asperiores. Accusantium eius rerum provident." />
    </div>
  );
};
