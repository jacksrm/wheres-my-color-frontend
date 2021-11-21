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
