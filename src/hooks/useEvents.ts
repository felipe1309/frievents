import { getEvets, createEvent } from "../services";
import { eventData, EventNew } from "../types/Events";
import useContexto from "./useContexto";
const useEvents = () => {
  const { user } = useContexto();
  const handdlerGetEvents = async (): Promise<eventData[] | undefined> => {
    try {
      const getEvents = await getEvets();
      const returnEvents = getEvents.map((eve) => ({
        admins: eve.admins,
        descripcion: eve.descripcion,
        id: eve.id,
        members: eve.members,
        name: eve.name,
        timeInit: eve.timeInit,
      }));

      return returnEvents;
    } catch (error) {
      throw new Error();
    }
  };
  const handdlerCreateNewEvent = async (
    dataEvent: EventNew
  ): Promise<eventData | undefined> => {
    try {
      if (user.auth) {
        const creatingEvent = await createEvent({
          token: user,
          eventData: dataEvent,
        });
        if (creatingEvent?.newEvent !== undefined) {
          const { updatedAt, createdAt, ...args } = creatingEvent.newEvent;
          return args;
        }
      }
      return undefined
    } catch (error) {
      throw new Error();
    }
  };

  return { handdlerGetEvents,handdlerCreateNewEvent };
};

export default useEvents;
