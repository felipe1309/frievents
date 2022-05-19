export interface UserToken {
  auth: boolean;
  token: string | null;
}
export type User = {
  email: string;
  name: string;
  password: string;
  id: string;
};
export type UserFormSIngIn = Pick<User, "email" | "name" | "password">;
export type UserFormSIngUp = Pick<User, "email" | "password">;
export type UserData = Omit<User, "password" | "id">;
export type UserDataWithId = Omit<User, "password">;
