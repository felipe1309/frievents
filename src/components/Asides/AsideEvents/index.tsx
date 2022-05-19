//styles dependencis
import { useEffect, useState } from "react";
import { getEvets } from "../../../services";
import { colors } from "../../../styles/colors";

//types
import {Event} from "../../../types/Events"
import ListMyEvents from "../ListMyEvents";

const AsideEvents = () => {
  const [event, setEvent] = useState<Event[]>([]);
  useEffect(() => {
    getEvets().then((data) => {
      setEvent(data);
    });
  }, []);
  return (
    <>
      <aside>
          <h2>my events</h2>
          <ListMyEvents listEvents={event}></ListMyEvents>
      </aside>
      <style jsx>{`
        aside {
          position: relative;
          width: 20vw;
          height: 94vh;
          background: ${colors.darkBlue};
          border-right: 2px solid ${colors.cyan};
          overflow: auto;
          padding:15px 0
        }
        h2{
            font-size:2rem
        }
      `}</style>
    </>
  );
};

export default AsideEvents;
