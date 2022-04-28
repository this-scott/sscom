import Head from "next/head";
import Navbar from "../components/navbar/navbar";
import SongList from "../components/musicplayer/songs";
import Bottombar from "../components/bottombar/bottombar";

export default function MusicPage() {
    return(
        <>
        <Head>
            <title>NPR please dont sue me</title>
        </Head>
        <Navbar></Navbar>
        <SongList></SongList>
        <Bottombar></Bottombar>
        </>
    )
}