import { ChangeEvent, useState } from "react";
const useForm = <T>(init: T) => {
  const [form, setForm] = useState<T>(init);
  const haddleForm = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return { form, haddleForm };
};

export default useForm;
