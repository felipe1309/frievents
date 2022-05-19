//conents
import Layout from "../components/layouts";
//hooks
import { createContext } from "react";
import useUser from "../hooks/useUser";
import {
  UserData,
  UserFormSIngIn,
  UserFormSIngUp,
  UserToken,
} from "../types/User";
export const ContextoCrud = createContext<contexto>({} as contexto);
//types
type contexto = {
  user: UserToken;
  handdleResetUser: () => void;
  handdleSingIn: (user: UserFormSIngIn) => void;
  handdleSingUp: (user: UserFormSIngUp) => void;
  handdleGetDataOfUser: () => Promise<UserData>;
};
type props = {
  children: JSX.Element | JSX.Element[];
};

//context

const index = ({ children }: props) => {
  const {
    user,
    handdleSingIn,
    handdleResetUser,
    handdleSingUp,
    handdleGetDataOfUser,
  } = useUser();
  const data = {
    user,
    handdleResetUser,
    handdleSingIn,
    handdleSingUp,
    handdleGetDataOfUser,
  };
  return (
    <>
      <ContextoCrud.Provider value={data}>
        <Layout>{children}</Layout>
      </ContextoCrud.Provider>
    </>
  );
};

export default index;
