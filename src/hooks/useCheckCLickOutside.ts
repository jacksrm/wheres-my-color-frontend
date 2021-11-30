import { MutableRefObject, useEffect } from 'react';

export const useCheckCLickOutside = (
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

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
};
