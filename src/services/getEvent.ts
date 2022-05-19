import axios from "axios";
import { Event } from "../types/Events";

export const getEvent = async (id: string): Promise<Event | undefined> => {
  try {
    const event = await axios.get(`http://localhost:3000/api/events/${id}`);
    return event.data as Event;
  } catch (error) {
    throw new Error();
  }
};
