import Head from "next/head";
import Navbar from "../components/navbar";
import Player from "../components/bplayer";
import SongList from "../components/songs";

export default function MusicPage() {
    return(
        <>
        <Head>
            <title>NPR please dont sue me</title>
        </Head>
        <Navbar></Navbar>
        <SongList></SongList>
        </>
    )
}