import jwt from "jsonwebtoken";
import { NextApiHandler } from "next";
import Users from "../../../models/Users";
import "../../../utils/databace";

const index: NextApiHandler = async (req, res) => {
  const { method, headers } = req;
  switch (method) {
    case "GET":
      if (
        process.env.SECRET_JWT &&
        typeof process.env.SECRET_JWT == "string" &&
        typeof headers.token == "string"
      ) {
        const dataOFToken = await jwt.verify(headers.token, process.env.SECRET_JWT);
        if (typeof dataOFToken == "object") {
          const dataUser = await Users.findById(dataOFToken.id);
          return res
            .status(201)
            .json({ name: dataUser.name, email: dataUser.email });
        }
      }

    default:
      return res.status(404).json({ message: "method is not soported" });
  }
};
export default index;
