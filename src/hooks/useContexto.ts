import { useContext } from "react";
import { ContextoCrud } from "../context";

const useContexto = () => {
  const contex =
    useContext(ContextoCrud);
  return contex;
};

export default useContexto;
