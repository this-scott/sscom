import CardsContainer from "./cardscontainer.module.css";
import React, { useEffect, useState } from 'react';
import cards from './businesscard.module.css';
import Image from "next/image";
import {people} from "./people";

export default function CardContainer({}) {

    const [width, setWidth] = React.useState(0);
    const [twocolumn, setColumn] = React.useState(true);

    //I THINK THIS ENTIRE PROCESS CAN BE OPTIMIZED USING FLEX DIVS
    React.useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }

        setWidth(window.innerWidth);

        if(width >= 1355 && twocolumn==false) {
            setColumn(true)
        }

        if(width < 1355 && twocolumn==true) {
            setColumn(false)
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    });

    /*if (width > 1355) {*/
        //move the class chooser to the Businesscard
        return (
            <>
            <div className={twocolumn ? CardsContainer.cardscontainercontainer : CardsContainer.cardscontainercontainer2}>
            <h1 className={CardsContainer.title}>The Cast and Crew</h1>
                {people.map((data,key) => {
                return (
                    <Businesscard key={key} width={width} name={data.name} image={data.image} college={data.college} major={data.major} fields={data.fields} email={data.email}></Businesscard>
                )
                })}
            </div>
            </>
        )
    }

export function Businesscard(props) {
    const [useVCard, setVCard] = React.useState(true);
    const [doubleBunk, setDouble] = React.useState(true);

    React.useEffect(() => {
        if (props.width >= 765 && useVCard==true) 
            setVCard(false);
        
        if (props.width < 765 && useVCard==false)
            setVCard(true);

        if (props.width >= 1355 && !doubleBunk) 
            setDouble(true);
        
        if (props.width < 1355 && doubleBunk)
            setDouble(false);
    });
    
    if(props.width < 765) {
        
        return (
            <div className={cards.vcard}>
                <div className={cards.vimagefitter}>
                    <Image src={props.image} alt={props.name} className={cards.circularborder} layout="fill" priority='true'/>
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
    } else {
        return (
            <div className={doubleBunk ? CardsContainer.cardcontainer : CardsContainer.blank}>
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
            </div>
        )
    }

}