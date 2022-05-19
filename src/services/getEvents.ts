import axios from "axios";

import { Event } from "../types/Events";
import { UserToken } from "../types/User";
export const getEvets = async (): Promise<Event[]> => {
  const data = await axios.get("http://localhost:3000/api/events")
  const events = data.data as Event[];
  return events;
};
