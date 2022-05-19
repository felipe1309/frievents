import jwt from "jsonwebtoken";
import { NextApiHandler } from "next";
import Users from "../../../models/Users";

const SingUp: NextApiHandler = async (req, res) => {
  const { method, body } = req;
  switch (method) {
    case "POST":
      const user = await Users.findOne({ email: body.email });
      if (
        typeof process.env.SECRET_JWT == "string" &&
        user &&
        (await user.validatePassword(body.password))
      ) {
        const token = jwt.sign({ id: user.id }, process.env.SECRET_JWT, {
          expiresIn: 60 * 60 * 24,
        });
        return res.status(201).json(token);
      }
      return res.status(201).json({ meassage: "auth not or token invalid" });
    default:
      return res.status(401).json({ msg: "method is not soported" });
  }
};
export default SingUp;
