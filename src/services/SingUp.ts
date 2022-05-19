import { UserFormSIngUp } from "../types/User";
import axios from "axios";
type props = {
  user: UserFormSIngUp;
};
export const SingUp = async ({ user }: props) : Promise<string | undefined> => {
  try {
    const handdleToken = await axios.post("http://localhost:3000/api/auth/singUp", user);
    const userToken = handdleToken.data as string
    const token = window.localStorage.setItem('token-user',userToken)
    return userToken;
  } catch (error) {
    
  }
};
