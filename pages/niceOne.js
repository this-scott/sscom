import Head from "next/head";
import { useEffect, useState } from "react";
import music from "../styles/mousic.module.css";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function NineOne() {
    const [songs, setsongs] =useState([
        {
            title: "MacMillerTinyDesk",
            artist: "Mac Miller",
            src: "../songs/MacMiller.mp3",
        },
        {
            title: "TylerTinyDesk",
            artist: "Tyler the Creator",
            src: "../songs/Tyler.mp3",
        }
    ]);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);
    return(
    <div>
    <Head>
        <title>Nice One</title>
        <meta name="keywords" content="music, scott styslinger, scott, styslinger"></meta>
    </Head>
    <Player
    song={songs[currentSongIndex]}
    nextSong={songs[nextSongIndex]}/>
    </div>
    );
}

function Player(props) {
    return (
        <div className={music.cplayer}>
            <audio></audio>
            <h4>Playing now</h4>
            <PlayerDetails song={props.song}/>
            <PlayerControls song={props.song}/>
            <p><strong>Next up: </strong>next song here</p>
        </div>
   )
}

function PlayerDetails(props) {
    return (
        <div className={music.playerdetails}>
            <div className={music.detailsimg}>
                <img src={props.song.img_src} alt=""></img>
            </div>
            <h3 className={music.detailstitle}>{props.song.title}</h3>
            <h3 className={music.detailsartist}>{props.song.artist}</h3>
        </div>
   )
 }
 function PlayerControls(props) {
    return (
      <div className={music.playercontrols}>
        <AudioPlayer
          autoPlay
          src={props.song.src}
          onPlay={(e) => console.log("onPlay")}
          // other props here
          showSkipControls
          autoPlayAfterSrcChange
        />
      </div>
   );
   }