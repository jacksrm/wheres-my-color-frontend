export interface ILoginData {
  email: string;
  password: string;
}

export interface ILoginContext {
  token: string;
  logIn: (data: ILoginData) => Promise<void>;
}

export interface IUserContext {
  profilePicture: string;
  userId: string;
  email: string;
  username: string;
  createdAt: string;
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

export interface IUserWithPalettes {
  _id: string;
  username: string;
  profilePicture: string;
  createdAt: string;
  palettes: IPalette[];
}
export interface AuthContextData {
  signed: boolean;
  token: string;
  user: object;
}
