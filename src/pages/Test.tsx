import {
  FC, useContext, useEffect, useState, useRef,
} from 'react';
import { AddButton } from 'components/AddButton';
import copy from 'clipboard-copy';
import { useCheckRightClick } from '../hooks/useCheckRightClick';
import { SuccessMessage } from '../components/SuccessMessage';
import { OverlayContainer } from '../components/OverlayContainer';

export const Test: FC = () => {
  // const [rightClick, setRightClick] = useState(false);
  const [show, setShow] = useState(false);
  const buttonRef = useRef(null);

  // useCheckRightClick(buttonRef, (rightClicked: boolean) => {
  //   if (rightClicked) {
  //     // setRightClick(RightClick);
  //     console.log('botão direito clicado!');
  //   }
  // });

  const btn = () => {
    document.addEventListener('click', () => {
      copy('teste copiou o lance aqui');
    });
  };

  return (
    <div>
      {show && (
      <OverlayContainer handle={() => setShow(false)}>
        <h1>puts</h1>
      </OverlayContainer>
      )}
      <button
        onClick={() => {
          setShow(true);
          btn();
        }}
        type="button"
      >
        aqui
      </button>
      <AddButton type="square" />
      <SuccessMessage animation="shake" message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, similique quos quas sit nesciunt, maxime aperiam in, explicabo dolorum cum consectetur deleniti neque placeat vitae asperiores. Accusantium eius rerum provident." />
    </div>
  );
};
