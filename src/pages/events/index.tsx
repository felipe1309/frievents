//components
import AsideEvents from "../../components/Asides/AsideEvents";

//styles
import { colors } from "../../styles/colors";

const index = () => {
  return (
    <>
      <div className="container">
        <AsideEvents></AsideEvents>
        <main>
          <h1>events</h1>
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

export default index;
