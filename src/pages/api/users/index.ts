import jwt from "jsonwebtoken";
import { NextApiHandler } from "next";
import Users from "../../../models/Users";
import "../../../utils/databace";

const index: NextApiHandler = async (req, res) => {
  const { method, body } = req;
  switch (method) {
    case "GET":
      const users = await Users.find();
      return res.status(201).json(users);
    case "POST":
      const newUser = new Users(body);
      newUser.password = await newUser.bcryptPassword(body.password);
      const user = await newUser.save();
      if (typeof process.env.SECRET_JWT == "string" && user) {
        const token = jwt.sign({ id: user.id }, process.env.SECRET_JWT, {
          expiresIn: 60 * 60 * 24,
        });
        return res.status(201).json({auth:true,token:token})
      }
      return res.status(401).json({message:"auth not or token invalid"});
    default:
      return res.status(401).json({ msg: "mothod is not suported" });
  }
};

export default index;
