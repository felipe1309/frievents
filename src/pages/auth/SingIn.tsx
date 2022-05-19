//components
import FormLogGroup from "../../components/Form/FormLog/FormLogGroup";
import FormInputLogSubmit from "../../components/Form/FormLog/FormLogInputSubmit";
import Head from "../../components/seo/Head";

//hooks
import { FormEvent, useEffect } from "react";
import useContexto from "../../hooks/useContexto";
import useForm from "../../hooks/useForm";
import { UserFormSIngIn } from "../../types/User";
import FormLogContainer from "../../components/Form/FormLog/FormLogContainer";
import Router from "next/router";

//page
const SingIn = () => {
  //hooks
  const { handdleSingIn, user } = useContexto();
  const { form, haddleForm } = useForm<UserFormSIngIn>({
    email: "",
    name: "",
    password: "",
  });
  const router = Router;

  useEffect(() => {
    if (window.localStorage.getItem("token-user")) {
      router.push('/')
    }


  }, [user.auth]);

  const handdleSubmitUser = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handdleSingIn(form);
    router.push('/')
  };

  return (
    <>
      <Head title="app - singin" />
      <main>
        <FormLogContainer title="felipe" submit={handdleSubmitUser}>
          <FormLogGroup labelName="name" nameInput="name" event={haddleForm} typeInput="name"></FormLogGroup>
          <FormLogGroup labelName="email" nameInput="email" event={haddleForm} typeInput="email"></FormLogGroup>
          <FormLogGroup labelName="password" nameInput="password" event={haddleForm} typeInput="password"></FormLogGroup>
          <FormInputLogSubmit></FormInputLogSubmit>
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

export default SingIn;
