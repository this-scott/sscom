import cards from './cards2.module.css'
import { people } from './people'
import Image from 'next/image'

export default function CardContainer() {
    return (
        <>
        <div className={cards.cardscontainercontainer}>
            <h1 className={cards.title}>The Cast and Crew</h1>
            <div className={cards.cardscontainer}>
                {people.map((data,key) => {
                return (
                    <Businesscard key={key} name={data.name} image={data.image} college={data.college} major={data.major} fields={data.fields} email={data.email}></Businesscard>
                )
                })}
            </div>
        </div>
        </>
    )
}

function Businesscard(props) {
    return(
        <div className={cards.card}>
            <div className={cards.leftside}>
                <div className={cards.imagefitter}>
                    <Image className={cards.circularborder} src={props.image} alt={props.name} layout="fill" priority='true'/>
                </div>
            </div>
            <div className={cards.rightside}>
                <h1>{props.name}</h1>
                <h2>Education</h2>
                <h4>{props.college}</h4>
                <h4>Major: {props.major}</h4>
                <h2>Fields of Interest</h2>
                <h4>{props.fields}</h4>
                <h4>Email: {props.email}</h4>
            </div>
        </div>
    )
}