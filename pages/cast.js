import CardContainer from "../components/businesscards/cardcontainer2";
import Head from "next/head";
import Navbar from "../components/navbar/navbar";
import Bottombar from "../components/bottombar/bottombar";

export default function Cast() {
    return (
      //this might be scuffed
      <>
      <Head>
        <title>The Cast</title>
        <meta name="keywords" content='Scott Styslinger, Scott, Styslinger'/>
      </Head>
      <Navbar></Navbar>
      <CardContainer></CardContainer>
      <Bottombar></Bottombar>
      </>
    )
  }
  