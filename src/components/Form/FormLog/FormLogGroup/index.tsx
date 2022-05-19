import { ChangeEvent, HTMLInputTypeAttribute, InputHTMLAttributes } from "react";

import { colors } from "../../../../styles/colors";
type props = {
  typeInput: HTMLInputTypeAttribute;
  event: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  nameInput: string;
  labelName: string;
};

const FormGroup = ({ typeInput, event, nameInput, labelName }: props) => {
  return (
    <>
      <div className="form-group">
        <label htmlFor={nameInput}>{labelName} :</label>
        <input
          autoComplete="off"
          name={nameInput}
          type={typeInput}
          id={nameInput}
          onChange={event}
        />
      </div>
      <style jsx>{`
        .form-group {
          height: 5rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        label {
          font-weight: bold;
          margin-right: 5px;
          color: ${colors.darkBlue};
        }
        input {
          height: 2rem;
          width: 500px;
          background: none;
          border: none;
          outline: none;
          border-bottom: 1px solid black;
          font-size: 1.2rem;
          color: ${colors.darkBlue};
        }
        input:focus {
          border: none;
          outline: 2px solid #0003;
        }
      `}</style>
    </>
  );
};

export default FormGroup;
