import { NextApiHandler } from "next";

//models
import Events from "../../../models/Events";
import Users from "../../../models/Users";
import "../../../utils/databace";
//dependences
import jwt from "jsonwebtoken";
const index: NextApiHandler = async (req, res) => {
  const { body, method, headers } = req;
  switch (method) {
    case "GET":
      try {
        const events = await Events.find();
        return res.status(201).json(events);
      } catch (error) {
        return res.status(401).json({ msg: error });
      }
    case "POST":
      try {
        if (
          typeof body.token == "string" &&
          typeof process.env.SECRET_JWT == "string"
        ) {
          const userData = jwt.verify(body.token, process.env.SECRET_JWT);
          if (typeof userData == "object") {
            const user = await Users.findById(userData.id);
            if (user !== undefined) {
              const newEvent = new Events({
                name: body.name,
                descripcion: body.descripcion,
                admins: [user._id],
                members: [user._id],
                timeInit: body.timeInit,
              });
              const Event = await newEvent.save();
              return res.status(201).json(Event);
            }
          }
        }

        return res.status(201).json({ msg: "token invalid or user null" });
      } catch (error) {
        res.status(500).json({ msg: error });
      }
    default:
      return res.status(401).json({ message: "method is not soported" });
  }
};

export default index;
