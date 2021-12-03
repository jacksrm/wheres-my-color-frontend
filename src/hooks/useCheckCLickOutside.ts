import { MutableRefObject, useEffect } from 'react';

type TUseCheckClickOutside = (
  ref: MutableRefObject<HTMLElement | null>,
  callback: (outsideClick: boolean) => void,
) => void;

export const useCheckCLickOutside: TUseCheckClickOutside = (
  ref: MutableRefObject<HTMLElement | null>,
  callback: (outsideClick: boolean) => void,
) => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!ref.current?.contains(event.target as Node)) {
        callback(true);
      } else {
        callback(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
};
