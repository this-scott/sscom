import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import navstyles from './navbar.module.css';

//the navbar can be redone with everything being set by Justify-content:space-between and no margins
export default function Navbar({}) {
    const [width, setWidth] = React.useState(0);
    const [height, setHeight] = React.useState(0);
    
    //get page width
    React.useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        }

        setWidth(window.innerWidth)
        setHeight(window.innerHeight)

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    });

        //get scroll direction, down = false, up = true
    const [scrollDir, setScrollDir] = useState(true);
    useEffect(() => {
        const threshold = 0;
        let lastScrollY = window.pageYOffset;
        let ticking = false;
    
        const updateScrollDir = () => {
            const scrollY = window.pageYOffset;
    
            if (Math.abs(scrollY - lastScrollY) < threshold) {
            ticking = false;
            return;
            }
            setScrollDir(scrollY > lastScrollY ? false : true);
            lastScrollY = scrollY > 0 ? scrollY : 0;
            ticking = false;
        };
    
        const onScroll = () => {
            if (!ticking) {
            window.requestAnimationFrame(updateScrollDir);
            ticking = true;
            }
        };
    
        window.addEventListener("scroll", onScroll);
        console.log(scrollDir);
    
        return () => window.removeEventListener("scroll", onScroll);
        }, [scrollDir]);
        
        if(width > 1275) {
            return (
                <>
                <div className={navstyles.filler}/>
                <div className={navstyles.header} style={scrollDir ? {transition: 'opacity 200ms'} : {opacity: '50%'}}>
                    <div className={navstyles.lcontainer}>
                        <div className={navstyles.tlink}>
                            <h1 className={navstyles.h1}>
                                <Link href={"/"}>
                                    <a className={navstyles.linkw}>Scott Styslinger</a>
                                </Link>
                            </h1>
                        </div>
                        <Rnavbar></Rnavbar>
                    </div>
                </div>
                </>
            )
        } else if(width < 765) {
            return (
                <div className={navstyles.header} style={scrollDir ? {transition: 'opacity 200ms'} : {opacity: '50%'}}>
                <div className={navstyles.lcontainer2}>
                    <div className={navstyles.tlink}>
                        <h1 className={navstyles.h1}>
                            <Link href={"/"}>
                                <a className={navstyles.linkf}>Scott Styslinger</a>
                            </Link>
                        </h1>
                    </div>
                    <FullBar width={width} height={height}></FullBar>
                </div>
            </div>
            )
        } else {
            return (
                <div className={navstyles.header} style={scrollDir ? {transition: 'opacity 200ms'} : {opacity: '50%'}}>
                <div className={navstyles.lcontainer2}>
                    <div className={navstyles.tlink}>
                        <h1 className={navstyles.h1}>
                            <Link href={"/"}>
                                <a className={navstyles.linkf}>Scott Styslinger</a>
                            </Link>
                        </h1>
                    </div>
                    <RBar></RBar>
                </div>
            </div>
            )
        }
}

export function Rnavbar() {
    return (
        <nav className={navstyles.navcontainer}>
        <div className={navstyles.links}/*links that are broken rn, to be fixed*/>
            <h2>
                <Link href={"/cast"}>
                    <a className={navstyles.linkw}>Why Scott?</a>
                </Link>
            </h2>
            <h2>
                <Link href={"/resume"}>
                    <a className={navstyles.linkw}>Resume</a>
                </Link>
            </h2>
            <h2>
                <a className={navstyles.linkw} href="https://github.com/this-scott">
                    Projects
                </a>
            </h2>
            <h2>
                <a className={navstyles.linkw} href="https://www.linkedin.com/in/this-scott/">
                    Contact Me
                </a>
            </h2>
        </div>
    </nav>
    )
}

export function RBar() {

    const [hide, togglehide] = useState(true);

    return (
        <div className={navstyles.dropdown}>
            <button onClick={() => togglehide(!hide)}><img className={navstyles.hambuga} src="/images/Hamburger.png"/></button>
            <div className={hide ? navstyles.content : navstyles.cshown}>
                <div className={navstyles.contentbar}>
                    <Link href={"/resume"}>
                        <a><div className={navstyles.link}>Resume</div></a>
                    </Link>
                </div>
                <div className={navstyles.contentbar}>
                    <a href="https://github.com/this-scott">
                        <div className={navstyles.link}>Projects</div>
                    </a>
                </div>
                <div className={navstyles.contentbar}>
                    <Link href={"/cast"}>
                        <a><div className={navstyles.link}>Why Scott?</div></a>
                    </Link>
                </div>
                <div className={navstyles.contentbar}>
                    <a href="https://www.linkedin.com/in/this-scott/">
                        <div className={navstyles.link}>Contact Me</div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export function FullBar(props) {

    const [hide, togglehide] = useState(true);

    return (
        <div className={navstyles.dropdown}>
            <button onClick={() => togglehide(!hide)}><img className={navstyles.hambuga} src="/images/Hamburger.png"/></button>
            <div style={hide ? {width: props.width} : {height: props.height-(100), width:props.width+(props.width*.1), marginLeft:-props.width+(props.width*.15)}} className={hide ? navstyles.fcontent : navstyles.fcshown}>
                <div className={navstyles.contentbar}>
                    <Link href={"/resume"}>
                        <a><div className={navstyles.link}><h2>Resume</h2></div></a>
                    </Link>
                </div>
                <div className={navstyles.contentbar}>
                    <a href="https://github.com/this-scott">
                        <div className={navstyles.link}><h2>Projects</h2></div>
                    </a>
                </div>
                <div className={navstyles.contentbar}>
                    <Link href={"/cast"}>
                        <a><div className={navstyles.link}><h2>Why Scott?</h2></div></a>
                    </Link>
                </div>
                <div className={navstyles.contentbar}>
                    <a href="https://www.linkedin.com/in/this-scott/"><div className={navstyles.link}><h2>Contact Me</h2></div></a>
                </div>
            </div>
        </div>
    )
}