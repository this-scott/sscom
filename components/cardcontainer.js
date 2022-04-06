import CardsContainer from "./cardscontainer.module.css";
import React, { useEffect, useState } from 'react';
import cards from './businesscard.module.css';
import Image from "next/image";

export default function CardContainer({}) {

    const [width, setWidth] = React.useState(0);
    const [twocolumn, setColumn] = React.useState(true);

    React.useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }

        setWidth(window.innerWidth);
        console.log(width);

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
                    <Businesscard width={width} name="Scott Styslinger" image="/images/40.jpg" college="University of Pittsburgh, School of Computing Information" major="Computer Science" fields="General Computer Science and Information Science: Java, C++, Data Analytics, Full Stack Development" email="scott@scottstyslinger.com"></Businesscard>
                    <Businesscard width={width} name="Ojas Mishra" image="/images/ojas.jpg" college="University of Pittsburgh, School of Computing Information" major="Computer Science" fields="General Computer Science/Algorithm Programming: Python, Java, C, Node Backend Development" email="ojm15@pitt.edu"></Businesscard>
                    <Businesscard width={width} name="Melissa Yan" image="/images/M.jpg" college="New York University, Stern School of Business" major="Finance" fields="Consulting, Data science and analytics, Impact Investing" email="my2457@stern.nyu.edu"></Businesscard>
                    <Businesscard width={width} name="Sean Clements" image="/images/7.jpg" college="UMBC, Some Computer Science School" major="Computer Engineering" fields="Engineering, Engineering with Computers, Autodesk/Softworks, C++" email="No idea"></Businesscard>
                    <Businesscard width={width} name="Gary Snail" image="/images/gary.jpeg" college="Was he ever educated?" major="Snail Trail" fields="Gary now I know I messed I was wrong and now your gone" email="gary come home"></Businesscard>
                    <Businesscard width={width} name="Coming Soon" image="/images/racoon.png" college="'Add yourself here' and other features/optimizations" major="Besides Swiper and React-PDF I did this all myself" fields="This project was fun but cost me ~20 of my last 72 hours. I plan on keeping it updated for practice but I need a break" email="Update date TBD"></Businesscard>
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