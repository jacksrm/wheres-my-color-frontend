export interface ILoginContext {
  userId: string;
  email: string;
  token: string;
  username: string;
  createdAt: string;
  logIn: (data: ILoginData) => Promise<void>;
}

export interface ILoginData {
  email: string;
  password: string;
}