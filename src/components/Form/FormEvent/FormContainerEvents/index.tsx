import Router from "next/router";
import { FormEvent, useEffect, useState } from "react";
import useEvents from "../../../../hooks/useEvents";
import useForm from "../../../../hooks/useForm";
import { EventNew } from "../../../../types/Events";
import FormElement from "../FormElement"
import FormDataList from "../FormDataListElement"
import FormSubmitEventsElements from "../FormSubmitEventsElements"
import { UserDataWithId } from "../../../../types/User";
import { getUsers } from "../../../../services";
type propsFormEventsContainer = {
  children: JSX.Element | JSX.Element[];
};


const initEventState: EventNew = {
  descripcion: "",
  name: "",
  timeInit: new Date(),
};
const index = () => {
  const router = Router
  const { handdlerCreateNewEvent } = useEvents();
  const { form, haddleForm } = useForm<EventNew>(initEventState);
  const [users, setUsers] = useState<UserDataWithId[]>([]);
  useEffect(() => {
    getUsers().then((users) => {
      if (users) setUsers(users);
    });
  }, []);


  const submitCreateEvent = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const event = await handdlerCreateNewEvent(form);
    router.push(`/events/${event?.id}`);
  };
  return (
    <>
      <form onSubmit={submitCreateEvent}>
        <h1>crea un nuevo evento!!!</h1>
        <FormElement
              name="name"
              onChange={haddleForm}
              placeholder="nombre del evento"
              typeInput={"text"}
            />
            <FormElement
              name="descripcion"
              onChange={haddleForm}
              placeholder="descripcion del evento"
              typeInput={"text"}
            />
            <FormElement
              name="timeInit"
              onChange={haddleForm}
              placeholder="tiempo de inicio del evento"
              typeInput={"date"}
            />
            <FormDataList users={users}></FormDataList>
            <FormSubmitEventsElements />
      </form>
      <style jsx>{`
        form {
          width: 80%;
          border: 1px solid black;
          aspect-ratio: 9/5;
        }
      `}</style>
    </>
  );
};

export default index;
