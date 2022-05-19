import { FormEvent } from "react";

type props = {
  children: JSX.Element | JSX.Element[];
  title: string;
  submit:(e: FormEvent<HTMLFormElement>) => void
};
const FormLogContainer = ({ children, title, submit }: props) => {
  return (
    <>
      <form onSubmit={submit}>
        <div className="form-group form-title">
          <h2>{title}</h2>
        </div>
        {children}
      </form>
      <style jsx>{`
        form {
          display: flex;
          flex-direction: column;
          aspect-ratio: 9/5;
          height: 100%;
          background: beige;
          border-radius: 10px;
        }
      `}</style>
    </>
  );
};

export default FormLogContainer;
