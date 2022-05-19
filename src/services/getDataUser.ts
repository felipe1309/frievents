import axios from "axios";
import { UserData, UserToken } from "../types/User";
type props = {
  token: UserToken;
};
export const getDataUser = async ({ token }: props) : Promise<UserData> => {
  const data = await axios.get("http://localhost:3000/api/user", {
    headers: {
      token: token.token ? token.token : "",
    },
  });
  const dataUser=data.data as UserData
  return dataUser;
};
