//components
import FormGroup from "../../components/Form/FormLog/FormLogGroup";
import FormInputSubmit from "../../components/Form/FormLog/FormLogInputSubmit";
import Head from "../../components/seo/Head";

//hooks
import { FormEvent, useEffect } from "react";
import useContexto from "../../hooks/useContexto";
import useForm from "../../hooks/useForm";
import { UserFormSIngUp } from "../../types/User";
import Router from "next/router";
import FormLogContainer from "../../components/Form/FormLog/FormLogContainer";

const SingUp = () => {
  const router = Router;
  const { form, haddleForm } = useForm<UserFormSIngUp>({
    email: "",
    password: "",
  });
  const { user, handdleSingUp } = useContexto();

  useEffect(() => {
    if (window.localStorage.getItem("token-user") !== null) {
      router.push("/");
    }
  }, [user]);

  const handdleSubmitUser = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handdleSingUp(form);
    router.push("/");
  };

  return (
    <>
      <Head title="app - singin" />
      <main>
        <FormLogContainer title="felipe" submit={handdleSubmitUser}>
          <FormGroup
            labelName="email"
            nameInput="email"
            event={haddleForm}
            typeInput="email"
          ></FormGroup>
          <FormGroup
            labelName="password"
            nameInput="password"
            event={haddleForm}
            typeInput="password"
          ></FormGroup>
          <FormInputSubmit></FormInputSubmit>
        </FormLogContainer>
      </main>
      <style jsx>{`
        main {
          display: flex;
          justify-content: center;
          align-items: center;
          background: black;
        }
      `}</style>
    </>
  );
};

export default SingUp;
