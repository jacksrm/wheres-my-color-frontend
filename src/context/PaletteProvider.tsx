import {
  createContext, FC, useCallback, useContext, useMemo,
} from 'react';

import { wmcApi } from '../api';

import {
  IAddColor, IRemoveColor, IEditPalette, IPalette, IPaletteContext,
} from '../types';
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

  const removeColor = useCallback(
    async ({ paletteId, colorId }: IRemoveColor) => {
      const { status } = await wmcApi.delete(`/color/${paletteId}/${colorId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (status === 200) getUserPalettes();
    },
    [getUserPalettes, token],
  );

  const editPalette = useCallback(
    async (data: IEditPalette) => {
      const { status } = await wmcApi.put(`/palette/${data.paletteId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (status === 200) getUserPalettes();
    },
    [getUserPalettes, token],
  );

  const context = useMemo(
    () => ({
      palette,
      addColor,
      removeColor,
      editPalette,
    }),
    [palette, addColor, removeColor, editPalette],
  );

  return (
    <PaletteContext.Provider value={context}>
      {children}
    </PaletteContext.Provider>
  );
};
