import Router from "next/router";
import React from "react";
import { colors } from "../../../styles/colors";

type propsListEventElemnet = {
  name: string;
  url: string;
};
const ListEventElement = ({ name, url }: propsListEventElemnet) => {
  const router = Router;
  return (
    <>
      <li onClick={() => router.push(`/events/${url}`)}>{name}</li>
      <style jsx>{`
        li {
          width: 100%;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: 300ms all ease;
          cursor: pointer;
        }
        li:hover {
          background: ${colors.lighBlue};
        }
      `}</style>
    </>
  );
};

export default ListEventElement;
