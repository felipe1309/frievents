import jwt from "jsonwebtoken";
import { NextApiHandler } from "next";
import Users from "../../../models/Users";
import "../../../utils/databace";

const SingIn: NextApiHandler = async (req, res) => {
  const { method, body } = req;
  switch (method) {
    case "POST":
      try {
        const newUser = new Users(body);
        newUser.password = await newUser.bcryptPassword(body.password);
        const user = await newUser.save();
        if (typeof process.env.SECRET_JWT == "string" && user) {
          const token = jwt.sign({ id: user.id }, process.env.SECRET_JWT, {
            expiresIn: 60 * 60 * 24 * 30,
          });
          return res.status(201).json(token);
        }
        return res.status(401).json({ message: "auth not or token invalid" });
      } catch (error) {}
    default:
      return res.status(401).json({ msg: "mothod is not suported" });
  }
};

export default SingIn;
