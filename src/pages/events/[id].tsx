import { GetStaticPaths, GetStaticProps } from "next";
import AsideEvents from "../../components/Asides/AsideEvents";
import { getEvets } from "../../services";
import { colors } from "../../styles/colors";

import {getEvent} from "../../services"
import { Event } from "../../types/Events";
import { useEffect } from "react";
type propsPageEvent = {
  event:Event
}
const Index = ({event}:propsPageEvent) => {
  useEffect(() => {
    console.log(event)
  }, [])
  return (
    <>
      <div className="container">
        <AsideEvents></AsideEvents>
        <main>
          <h1>{event.name}</h1>
          <ul>
            <li>admins</li>
            {
              event.admins.map(adm=><li>{adm}</li>)
            }
          </ul>
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
        }
      `}</style>
    </>
  );
};
export const getStaticPaths:GetStaticPaths= async ()=>{
  const paths = (await getEvets()).map(path=>path.id)

  console.log(paths)
  return{
    paths:[],
    fallback:true
  }
}
export const getStaticProps:GetStaticProps =async (contexto)=>{
  const url = contexto.params?.id as string
  const event = await getEvent(url)
  return{
    props:{
      event
    }
  }
}
export default Index;
