//compoents
import useContexto from "../../hooks/useContexto";
import { colors } from "../../styles/colors";
import Navbar from "../Navbar";

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
      <header>
        <Navbar user={user} reset={handdleResetUser}></Navbar>
      </header>
      {children}
      <style global jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-size: 16px;
          list-style: none;
          text-decoration: none;
          color: ${colors.beige};
        }
        body {
          width: 100%;
          height: 100%;
          overflow:hidden
        }
        #__next {
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
        }
        main {
          width: 100%;
          min-height: 95vh;
          padding: 0 5%;
          padding-top:30px;
          background:${colors.darkBlue};
        }
        input{
          color:${colors.darkBlue}
        }
      `}</style>
    </>
  );
};

export default index;
