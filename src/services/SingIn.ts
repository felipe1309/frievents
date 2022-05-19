import axios from "axios";
import { UserFormSIngIn } from "../types/User";
type props = {
  User: UserFormSIngIn;
};

//return una promesa de un token
export const singIn = async ({ User }: props): Promise<string | undefined> => {
  try {
    const user = await axios.post(
      "http://localhost:3000/api/auth/singIn",
      User
    );
    const userToken = user.data as string;
    const tokenLocalStorage = await window.localStorage.setItem(
      "token-user",
      userToken
    );
    //retorna un Token
    return userToken;
  } catch (error) {
    console.error(error);
  }
};
