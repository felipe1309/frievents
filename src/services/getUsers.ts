import axios from "axios";
import { UserDataWithId } from "../types/User";
export const getUsers = async (): Promise<UserDataWithId[] | undefined> => {
  try {
    const getUsers = await axios.get("http://localhost:3000/api/users");
    const usersData = getUsers.data as UserDataWithId[];
    return usersData;
  } catch (error) {
    throw new Error();
  }
};
