//hooks
import React, { useEffect, useState } from "react";

//components
import AsideEvents from "../../components/Asides/AsideEvents";
import ContainerFormEVent from "../../components/Form/FormEvent/FormContainerEvents";

//services

import { colors } from "../../styles/colors";

const CreateEvent = () => {
  return (
    <>
      <div className="container">
        <AsideEvents></AsideEvents>
        <main>
          <ContainerFormEVent />{" "}
        </main>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          width: 100%;
          height: 94vh;
          overflow: hidden;
        }
        main {
          position: relative;
          width: 80vw;
          height: 94vh;
          background: ${colors.darkBlue};
          overflow: auto;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  );
};

export default CreateEvent;
