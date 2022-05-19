import { useEffect, useState } from "react";
import { getDataUser } from "../services/getDataUser";
import { singIn } from "../services/SingIn";
import { SingUp } from "../services/SingUp";
import { UserFormSIngIn, UserFormSIngUp, UserToken } from "../types/User";

const useUser = () => {
  const [user, setUser] = useState<UserToken>({
    auth: false,
    token: null,
  });
  useEffect(() => {
    const token = window.localStorage.getItem("token-user");
    if (token) {
      setUser({
        auth: true,
        token,
      });
    }
  }, []);

  const handdleSingIn = async (user: UserFormSIngIn) => {
    try {
      const token = await singIn({ User: user });
      if (typeof token == "string") {
        setUser({
          auth: true,
          token,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handdleSingUp = async (user: UserFormSIngUp) => {
    const token = await SingUp({ user });
    if (typeof token == "string") {
      setUser({
        auth: true,
        token,
      });
    }
  };

  const handdleResetUser = () => {
    window.localStorage.removeItem("token-user");
    setUser({
      auth: false,
      token: null,
    });
  };

  const handdleGetDataOfUser = async () => {
    try {
      const data = await getDataUser({ token: user });
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  return {
    user,
    handdleSingIn,
    handdleResetUser,
    handdleSingUp,
    handdleGetDataOfUser,
  };
};

export default useUser;
