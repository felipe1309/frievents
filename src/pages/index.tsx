//types
import type { NextPage } from "next";
import Head from '../components/seo/Head'
//hooks
import { useEffect } from "react";
import useContexto from "../hooks/useContexto";

//page
const Home: NextPage = () => {
  const {user} = useContexto()
  
  return (
    <>
    <Head title='home page'/>
    <main className="app">
      <h1>felipe</h1>
    </main>
    
    </>
  );
};

export default Home;
