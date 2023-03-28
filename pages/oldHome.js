import Homeslider from "../components/homeslider/homeslider";
import Head from "next/head";
import Navbar from "../components/navbar/navbar";
import Bottombar from "../components/bottombar/bottombar";

export default function OldHome() {
    return(
        <>
        <Head>
            <title>Scott Styslinger</title>
        </Head>
        <Navbar></Navbar>
            <Homeslider></Homeslider>
        <Bottombar></Bottombar>
        </>
    )
}