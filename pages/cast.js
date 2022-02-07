import Navbar from "../components/navbar"
import CardsContainer from "../styles/cardscontainer.module.css"
import Businesscard from "../components/businesscard"

export default function Cast() {
    return (
        <>
        <Navbar></Navbar>
        <h1 className={CardsContainer.title}>The Cast and Crew</h1>
        <div className={CardsContainer.cardscontainercontainer}>
            <Businesscard name="Scott Styslinger" image="/images/40.jpg" college="University of Pittsburgh, School of Computing Information" major="Computer Science" fields="General Computer Science and Information Science: Java, C++, Data Analytics, Full Stack Development" email="scott@scottstyslinger.com"></Businesscard>
            <Businesscard name="Ojas Mishra" image="/images/ojas.jpg" college="University of Pittsburgh, School of Computing Information" major="Computer Science" fields="General Computer Science/Algorithm Programming: Python, Java, C, Node Backend Development" email="ojm15@pitt.edu"></Businesscard>
            <Businesscard name="Melissa Yan" image="/images/M.jpg" college="New York University, Stern School of Business" major="Finance" fields="Consulting, Data science and analytics, Impact Investing" email="my2457@stern.nyu.edu"></Businesscard>
            <Businesscard name="Sean Clements" image="/images/7.jpg" college="University of Maryland Baltimore County" major="Computer Engineering" fields="Engineering, Engineering with Computers, Autodesk/Softworks" email="No idea"></Businesscard>
            <Businesscard name="Gary Snail" image="/images/gary.jpeg" college="Was he ever educated?" major="Snail Trail" fields="Gary now I know I messed I was wrong and now your gone" email="gary come home"></Businesscard>
            <Businesscard name="Coming Soon" image="/images/racoon.png" college="'Add yourself here' and other features/optimizations" major="Besides Swiper and React-PDF I did this all myself" fields="This project was fun but cost me ~20 of my last 72 hours. I plan on keeping it updated for practice but I need a break" email="February 19, 2022"></Businesscard>
        </div>
        </>
    )
}