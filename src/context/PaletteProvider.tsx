import {
  createContext, FC,
} from 'react';

import { IPalette } from '../types';

export const PaletteContext = createContext({} as IPalette);

interface IPaletteProvider {
  palette: IPalette;
}

export const PaletteProvider: FC<IPaletteProvider> = ({ palette, children }) => (
  <PaletteContext.Provider value={palette}>
    {children}
  </PaletteContext.Provider>
);
