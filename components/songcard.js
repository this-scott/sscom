import BP from "./bplayer.module.css";
import Image from "next/image";


export default function Songcard(props) {

    handleClick = () => {
        props.setsong(props.src);
    }

    return (
        <>
        <div className={BP.cardcontainer}>
            <div className={BP.aimagecontainer}>
                <Image src={props.isrc} width="300" height="300" alt="Album Image"/>
            </div>
            <div className={BP.cardright}>
                <h2 className={BP.stitle}>{props.title}</h2>
                <h3 className={BP.sartist}>{props.artist}</h3>
            </div>
            <div className={BP.playbutton}>
                <button onClick={this.handleClick}><Image className={BP.circularborder} src="/images/playbutton2.jpg" width="300" height="300" alt="albumimage"/></button>
            </div>
        </div>
        </>
    )
}