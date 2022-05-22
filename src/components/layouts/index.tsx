//compoents
import useContexto from "../../hooks/useContexto";
import { colors } from "../../styles/colors";
import Navbar from "../Navbar";
import Head from "../seo/Head";
import { Container } from "@mui/material";
//hooks

//type
type props = {
  children: JSX.Element | JSX.Element[];
};

//component
const index = ({ children }: props) => {
  const { user, handdleResetUser } = useContexto();
  return (
    <>
      <Container maxWidth="xl">
        <Navbar></Navbar>
        {children}
      </Container>
      <style global jsx>{`
        body {
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        #__next {
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default index;
