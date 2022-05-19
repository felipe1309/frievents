import { NextApiHandler } from "next";
import "../../../utils/databace";
import Users from "../../../models/Users";
import jws from "jsonwebtoken";
const MyEvents: NextApiHandler = async (req, res) => {
  const { method, headers } = req;
  const userToken = headers.userToken as string;
  switch (method) {
    case "GET":
      try {
        const resToken = jws.verify(
          userToken,
          process.env.SECRET_JWT as string
        );
        if (typeof resToken == "object") {
          const user = await Users.findById(resToken.id) as object
          return res.status(201).json(user)
          
        }
      } catch (error) {
        return res.status(401).json({msg:error})
      }
    default:
      return res.status(500).json({ msg: "method not is soported" });
  }
};

export default MyEvents;
