import BP from "./bplayer.module.css";
import {songdata} from "./songdata";
import Player from "../components/bplayer";
import Image from "next/image";
import React, {useEffect, useState } from 'react';

export default function Songs() {
    const [song, setsong] = useState('');
    const [title, settitle] = useState('');
    const [artist, setartist] = useState('');

    function changeSong(song, title, artist) {
        setsong(song)
        settitle(title);
        setartist(artist);
        console.log("changing song to " + title + "by" + artist);
    }
    return (
        <>
        <div className={BP.songscontainer}>
        {songdata.map((data,key) => {
            return (
                <Songcard songset = {changeSong} src={data.src} isrc={data.isrc} title={data.title} artist={data.artist} key = {key}></Songcard>
            )
        })}
        </div>
        <Player src={song} title = {title} artist = {artist}></Player>
        </>
    )
}

function Songcard(props) {
    function handleClick() {
        props.songset(props.src, props.title, props.artist)    }
    return (
        <>
        <div className={BP.cardcontainer}>
            <div className={BP.aimagecontainer}>
                <Image src={props.isrc} width="300" height="300"/>
            </div>
            <div className={BP.cardright}>
                <h2 className={BP.stitle}>{props.title}</h2>
                <h3 className={BP.sartist}>{props.artist}</h3>
            </div>
            <div className={BP.playbutton}>
                <button onClick={handleClick}><Image className={BP.circularborder} src="/images/playbutton2.jpg" width="300" height="300"></Image></button>
            </div>
        </div>
        </>
    )
}
