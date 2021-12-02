export interface ILoginData {
  email: string;
  password: string;
}

export interface ILoginContext {
  token: string;
  logIn: (data: ILoginData) => Promise<void>;
}

export interface IColors {
  values: {
    hex: string;
    rgb: string;
  };
  title: string;
  _id: string;
}

export interface IPalette {
  colors: {
    values: {
      hex: string;
      rgb: string;
    };
    title: string;
    _id: string;
    createdAt: string;
    updatedAt: string;
  }[];
  ownerId: string;
  name: string;
  isPublic: boolean;
  createdAt: string;
  updatedAt: string;
  membersId: string[];
  authorizeChange: string[];
  _id: string;
}

export interface IAddPaletteData {
  name: string;
  isPublic: boolean;
}

export interface IRemovePalette {
  paletteId: string;
}

export interface IAddColor {
  data: {
    title?: string;
    values: {
      hex: string;
      rgb: string;
    };
  };
  paletteId: string;
}

export interface IUserWithPalettes {
  _id: string;
  username: string;
  profilePicture: string;
  createdAt: string;
  palettes: IPalette[];
}

export interface IUserContext {
  profilePicture: string;
  userId: string;
  email: string;
  username: string;
  createdAt: string;
  palettes: IPalette[];
  addPalette: (data: IAddPaletteData) => void;
  removePalette: (data: IRemovePalette) => void;
  addColor: (data: IAddColor) => Promise<void>
}
