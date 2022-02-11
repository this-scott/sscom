import cards from './businesscard.module.css'
import Image from 'next/image'

export default function Verticalcard(props) {
    return (
        <div className={cards.vcard}>
            <div className={cards.vimagefitter}>
                <Image src={props.image} alt={props.name} className={cards.circularborder} layout="fill"/>
            </div>
            <div className={cards.vertical}>
                <h1>{props.name}</h1>
                <h3>{props.email}</h3>
                <h3>{props.college}</h3>
                <h3>Major: {props.major}</h3>
                <h2>Fields of Interest</h2>
                <h4>{props.fields}</h4>
            </div>
        </div>
    )
}