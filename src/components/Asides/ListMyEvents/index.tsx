import ListEventElement from "./../ListEventElement";
import Link from "next/link";
import { Event } from "../../../types/Events";
import { colors } from "../../../styles/colors";

type propsEventList = {
  listEvents: Event[];
};
const ListMyEvents = ({ listEvents }: propsEventList) => {
  return (
    <>
      <ul>
        <li>
          <Link href="/events/CreateEvent">
            <a>crear evento</a>
          </Link>
        </li>
        {listEvents.map((event) => (
          <ListEventElement
            key={event.id}
            name={event.name}
            url={event.id}
          ></ListEventElement>
        ))}
      </ul>
      <style jsx>{`
        ul {
          width: 100%;
          height: auto;
          display: flex;
          flex-direction: column;
        }
        li {
          width: 100%;
          height: 40px;
          display:flex;
          justify-content: center;
          align-items: center;
          transition: 300ms all ease;
          cursor: pointer;
        }
        li:hover{
          background: ${colors.cyan};
        }
      `}</style>
    </>
  );
};

export default ListMyEvents;
