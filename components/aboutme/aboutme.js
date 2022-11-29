import aboutme from './aboutme.module.css'
import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import react from 'react';
import Item from './item';

export default function Aboutme(){

    /*Add sections to this compoent
    1. Who am I
    2. What do I do
    3. What is this page
    */
    const [sexpHov, setSexpHov] = react.useState(false)
    const [iBioHov, setiBioHov] = react.useState(false)
    const [wexpHov, setWexpHov] = react.useState(false)
    const [softskHov, setSoftSkHov] = react.useState(false)
    const [eduHov, setEduHov] = react.useState(false)

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
    const [leducation, setLeducation] = react.useState(<div>
        <h2>University of Pittsburgh: 2025</h2>
        <ul>
            <li><h4><strong>Notable Courses:</strong> Data Structures, Computer Organization and Assembly</h4></li>
            <li><h4>Extracirriculars: Alpha Sigma Phi: Philanthropy Chair, Kappa Theta Pi Professional Organization, Mixed Martial Arts Club</h4></li>
        </ul>
        </div>)


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
                    <div><ul>
                        <li><Item text={<h4>4 years Application Development using Java and Python</h4>} ltext={
                            <p>Used these tools to create various tools such as Minecraft mods, homework automators(only for hs accounting), and race track analyzers</p>
                        }></Item></li>
                        <li><Item text={<h4>2 years Web Development using Next.js Framework</h4>} ltext={<div>
                            <p>Experimented with Google Maps and Alpaca APIs for various front and back end applications</p>
                        </div>}></Item></li>
                        <li><Item text={<h4>1 year Penetration Testing using Wireshark, NMap, Metasploit</h4>} ltext={<div>
                            <p>I don&apos;t have a lot of hands on experiences in the pentesting field by I like to play around with and research the tools</p>
                        </div>}></Item></li>
                    </ul></div>
                    </div>
                </div>
                <div className={aboutme.pcontainer}>
                    <div className={aboutme.bbox}>
                    <h1>Work Experience</h1>
                    <div><ul>
                        <li><Item text={<h4>Lavner Education: Technology Instructor</h4>} ltext={<div><p>Taught a class informing campers about current implementations, software designs, and future uses of popular cryptocurrencies and blockchains</p>
        <p>Led children through various games and activities focusing on teamwork and cooperation to help build strong leadership and communication skills</p></div>}></Item></li>
                        <li><Item text={<h4>Domino&apos;s Pizza: Delivery Specialist &amp; Customer Service Representative</h4>}
                        ltext={
                        <div><p>Improved communication skills from working with both customers and a team</p>
                        <p>Enhanced my mapping/navigational skills which I use to understand complex concepts</p>
                        <p>Worked with customers at the register to understand and satisfy their needs</p></div>}>
                        </Item></li>
                        <li><Item text={<h4>TIC Summer Camp: Staff Assistant</h4>} ltext={<div>
                            <p>Assisted counselors in teaching children computer skills such as video editing, robotics, and programming</p>
                            <p>Worked around children and became a positive influence for the campers</p>
                            <p>Used Java, Vex Robotics, and Adobe Premiere</p>
                        </div>}></Item></li>
                    </ul></div>
                    </div>
                </div>
                <div className={aboutme.pcontainer}>
                    <div className={aboutme.bbox}>
                    <h1>Soft Skills</h1>
                    <div><ul>
                        <li><Item text={<h4>Public Speaking</h4>} ltext={
                            <p>4 years of Highschool Speech and Debate under the extemporaneous speaking and dramatic performance categories</p>
                        }></Item></li>
                        <li><Item text={<h4>Slideshow Presentations</h4>} 
                            ltext={<p>The only thing more helpful than an informative presentaion is w3schools and a presentation with visuals</p>}
                        ></Item></li>
                        <li><Item text={<h4>Microsoft Office Suite</h4>} 
                            ltext={<p>Google Platform Too!</p>}
                        ></Item></li>
                    </ul></div>
                    </div>
                </div>
                <div className={aboutme.pcontainer}>
                    <div className={aboutme.bbox}>
                    <h1>Education</h1>
                    <div>{eduHov ? leducation : leducation}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}