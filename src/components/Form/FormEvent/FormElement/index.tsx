import { ChangeEvent, HTMLInputTypeAttribute } from "react";

type propsFormELement = {
  placeholder: string;
  name: string;
  typeInput: HTMLInputTypeAttribute;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};
const index = ({
  name,
  onChange,
  placeholder,
  typeInput,
}: propsFormELement) => {
  return (
    <>
      <div className="form__group">
        <input
          onChange={onChange}
          placeholder={placeholder}
          name={name}
          type={typeInput}
        />
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default index;
