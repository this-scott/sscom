import CardContainer from "../components/cardcontainer";
import Head from "next/head";
import Navbar from "../components/navbar";

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
      </>
    )
  }
  