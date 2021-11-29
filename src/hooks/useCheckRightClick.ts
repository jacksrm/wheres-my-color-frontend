import { MutableRefObject, useEffect } from 'react';

export const useCheckRightClick = (
  ref: MutableRefObject<HTMLDivElement | null>,
  callback: (rightClick: boolean) => void,
) => {
  useEffect(() => {
    function handleRightClick(event: MouseEvent) {
      event.preventDefault();
      if (!ref.current?.contains(event.target as Node)) {
        callback(true);
      } else {
        callback(false);
      }
    }
    document.addEventListener('contextmenu', handleRightClick);

    return () => {
      document.removeEventListener('contextmenu', handleRightClick);
    };
  }, [ref, callback]);
};
