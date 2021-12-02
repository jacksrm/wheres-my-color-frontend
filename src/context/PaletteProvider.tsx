import {
  createContext, FC, useCallback, useContext, useMemo,
} from 'react';

import { wmcApi } from '../api';

import { IAddColor, IPalette, IPaletteContext } from '../types';
import { LoginContext } from './LoginProvider';
import { UserContext } from './UserProvider';

export const PaletteContext = createContext({} as IPaletteContext);

interface IPaletteProvider {
  palette: IPalette;
}

export const PaletteProvider: FC<IPaletteProvider> = ({
  palette,
  children,
}) => {
  const { getUserPalettes } = useContext(UserContext);
  const { token } = useContext(LoginContext);

  const addColor = useCallback(
    async ({ paletteId, data }: IAddColor) => {
      const { status } = await wmcApi.post(`/color/create/${paletteId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (status === 200) getUserPalettes();
    },
    [getUserPalettes, token],
  );

  const context = useMemo(() => ({
    palette,
    addColor,
  }), [palette, addColor]);

  return (
    <PaletteContext.Provider value={context}>
      {children}
    </PaletteContext.Provider>
  );
};
