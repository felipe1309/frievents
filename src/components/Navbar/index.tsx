//hooks
import { useRouter } from "next/router";
import useContexto from "../../hooks/useContexto";

//components
import Link from "next/link";
import { useEffect, useState } from "react";
import { UserData, UserToken } from "../../types/User";
import Router from "next/router";
import { colors } from "../../styles/colors";

//type
type props = {
  user: UserToken;
  reset: () => void;
};
//external
const initialUser: UserData = {
  email: "",
  name: "",
};

//component
const index = ({ user, reset }: props) => {
  const router = Router;
  const { handdleGetDataOfUser } = useContexto();
  const [userData, setUserData] = useState<UserData>(initialUser);
  useEffect(() => {
    if (user.auth) {
      const data = handdleGetDataOfUser().then((data) => {
        setUserData(data);
      });
    }
  }, [user.auth]);
  return (
    <>
      <nav>
        {user.auth ? (
          <>
            <ul className="nav__userActive">
              <li>
                <Link href="/"><a>Home</a></Link>
              </li>
              <li>
                <Link href="/events"><a>Events</a></Link>
              </li>
              <li>{userData.name}</li>
              <li><button onClick={reset}>reset</button></li>
            </ul>
          </>
        ) : (
          <>
            <ul className="nav__userInactive">
              <li>
                <Link href="/">home</Link>
              </li>
              <li>
                <Link href="/auth/SingIn">SingIn</Link>
              </li>
              <li>
                <Link href="/auth/SingUp">SingUp</Link>
              </li>
            </ul>
          </>
        )}
      </nav>
      <style jsx>{`
        nav {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          width: 100%;
          height: 60px;
          z-index:100;
          box-shadow:2px 2px 10px 0px ${colors.cyan};
          background:${colors.darkBlue}
        }
        ul {
          height: 100%;
          display: flex;
          flex-direction: row;
          width: 100%;
          justify-content: space-around;
          align-items: center;
        }
        li,
        a {
          font-size: 1.2rem;
          font-family:Comic Sans MS, Comic Sans, cursive;
          cursor:pointer;
          transition:300ms all ease;
        }
        li:hover{
          color:${colors.lighBlue}
        }

        a:hover{
          color:${colors.lighBlue}
        }
      `}</style>
    </>
  );
};

export default index;
