import BP from "./bplayer.module.css";
import Image from "next/image";
import AudioPlayer from "react-h5-audio-player";
import 'react-h5-audio-player/lib/styles.css';


export default function BPlayer(props) {
    return(
    <div className={BP.container}>
        <div className={BP.albumimage}>
            <Image src="/images/gary.jpeg" layout="fill" objectFit="contain"/>
        </div>
        <div className={BP.songcredits}>
            <h3>{props.title}</h3>
            <h4>{props.artist}</h4>
        </div>
        <div className={BP.audioplayer}>
            <AudioPlayer src={props.src} style={{height: "100%"}}/>
        </div>
    </div>
    )
}