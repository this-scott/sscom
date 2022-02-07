import cardS from './businesscard.module.css'
import Image from 'next/image'

export default function Businesscard(props) {
    return (
        <>
            <div className={cardS.card}>
                <div className={cardS.leftside}>
                    <div className={cardS.imagefitter}>
                        <Image className={cardS.circularborder} src={props.image} alt={props.name} layout="fill"/>
                    </div>
                </div>
                <div className={cardS.rightside}>
                    <h1>{props.name}</h1>
                        <h2>Education</h2>
                        <h4>{props.college}</h4>
                        <h4>Major: {props.major}</h4>
                        <h2>Fields of Interest</h2>
                        <h4>{props.fields}</h4>
                        <h4>Email: {props.email}</h4>
                </div>
            </div>
        </>
    )
}