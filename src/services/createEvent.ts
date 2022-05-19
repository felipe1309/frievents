import axios from "axios";
import { EventNew, Event } from "../types/Events";
import { UserToken } from "../types/User";
type props = {
  token: UserToken;
  eventData: EventNew;
};
type returnProps = {
    newEvent:Event
}
export const createEvent = async ({
  token,
  eventData,
}: props): Promise<returnProps | undefined> => {
  try {
    const creatingEvent = await axios.post("http://localhost:3000/api/events", {
      token: token.token,
      ...eventData,
    });
    const newEvent = creatingEvent.data as Event;
    return {newEvent};
  } catch (error) {
    throw new Error();
  }
};
