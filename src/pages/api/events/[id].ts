//types
import { NextApiHandler } from "next";

//models
import Events from "../../../models/Events";

const handdlerEvent: NextApiHandler = async (req, res) => {
  const { method, body, query } = req;
  const id = query.id as string;
  switch (method) {
    case "GET":
      try {
        const event = await Events.findById(id);
        if (event !== undefined) {
          return res.status(201).json(event);
        }
        return res.status(401).json({ msg: "event undefined" });
      } catch (error) {
        return res.status(500).json({ msg: error });
      }
    case "DELETE":
      try {
        console.log(id);
        const event = await Events.findByIdAndDelete(id);
        if (event !== undefined && event !== null) {
          return res.status(201).json({ msg: "deleted" });
        }
        return res.status(401).json({ msg: "event undefined" });
      } catch (error) {
        return res.status(500).json({ msg: error });
      }

    default:
      return res.status(500).json({ msg: "method is not soported" });
  }
};
export default handdlerEvent;
