import aboutme from './aboutme.module.css'
import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import react from 'react';

export default function Aboutme(){

    /*Add sections to this compoent
    1. Who am I
    2. What do I do
    3. What is this page
    */
    const [sexpHov, setSexpHov] = react.useState(false)
    const [iBioHov, setiBioHov] = react.useState(false)
    const [bio, setBio] = React.useState(<p>If I could desribe myself in a few words they would be &#39;curiosity towards efficiency&#39;. I have always been a curious person. 
    As a kid, I remember connecting the cables to setup my Wii and wondering what each cable was for. In elementary school, I was installing games Wizard 101 onto my computer(without asking for parent permission before going online:). 
    By middle school I had accidentally learned the ins and outs of file explorer from modding minecraft so many times and watching videos about hardware for fun.
    Despite my technological interest, I never began programming until my high school junior year. It was definitely rough at first the knowledge I had accumulated 
    had given me a jump start! After getting the hang of OOP I started noticing tasks I was doing repeatedly on my computer and started writing codes to fix them.
    During senior year, I wrote a script using Excel VBA to do my accounting homework for me. These days I tend bite off more than I can chew or start projects that 
    require a lot of commitment for a college student. Many of them are works in progress but as I keep on learning through schooling and out of personal curiousity
    I am finding new, more efficient ways to write my code.</p>)
    const [sbio, setSBio] = React.useState(<ul>
                                                <li><h4>Strong learner with a curiosity on how to make his code more efficient</h4></li>
                                                <li><h4>Blossoming programmer whose always had an interest in technology</h4></li>
                                                <li><h4>Information Science major with an interest in security</h4></li>
                                                <li><h4>Vocal communicator who will coordinate energetically with your team</h4></li>
                                            </ul>)

    const [softExp, setSoftExp] = react.useState(<ul>
        <li><h4>4 years Application Development using Java and Python</h4></li>
        <li><h4>2 years Web Development using Next.js Framework</h4></li>
        <li><h4>1 year Penetration Testing using Wireshark, NMap, Metasploit</h4></li>
        </ul>)

    const [loftExp, setLoftExp] = react.useState(<ul>
        <li><h4>4 years Application Development using Java, Python, Excel VBA</h4>
            <p>Used these tools to create various tools such as Minecraft mods, homework automators(only for hs accounting), and race track analyzers</p>
        </li>
        <li><h4>2 years Full Stack Development using Node and Next js Frameworks</h4>
            <p>Experimented with Google Maps and Alpaca API for various front and back end applications</p></li>
        <li><h4>1 year Penetration Testing using Wireshark, NMap, Metasploit</h4></li>
    </ul>)

    return (
        <div>
            <div className={aboutme.titlediv}>
                <h1>About Me</h1>
            </div>
            <div className={aboutme.row}>
                <div className={aboutme.pcontainer}>
                    <div className={aboutme.pimg}>
                    <Image priority={true} src="/images/Headshot.jpg" layout='fill'></Image>
                    </div>
                </div>
                <div className={aboutme.pcontainer}>
                    <div className={aboutme.bbox}>
                    <h1>Who Am I?</h1>
                    <div onMouseEnter={()=>setiBioHov(!iBioHov)} onMouseLeave={()=>setiBioHov(!iBioHov)}>{iBioHov ? bio : sbio}</div>
                    </div>
                </div>
                <div className={aboutme.pcontainer}>
                    <div className={aboutme.bbox}>
                    <h1>Software Experience</h1>
                    <div onMouseEnter={()=>setSexpHov(!sexpHov)} onMouseLeave={()=>setSexpHov(!sexpHov)}>{sexpHov ? loftExp : softExp}</div>
                    </div>
                </div>
                <div className={aboutme.pcontainer}>
                    <h1>Work Experience</h1>
                </div>
                <div className={aboutme.pcontainer}>
                    <h1>Soft Skills</h1>
                </div>
                <div className={aboutme.pcontainer}>
                    <h1>Education</h1>
                </div>
            </div>
        </div>
    )
}