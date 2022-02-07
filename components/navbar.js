import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import useWindowDimensions from '../hooks/useWindowDimensions';
import navstyles from './navbar.module.css';
import Image from 'next/image';

//the navbar can be redone with everything being set by Justify-content:space-between and no margins
export default function Navbar({}) {

    const [width, setWidth] = React.useState(0);
    React.useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }

        setWidth(window.innerWidth)
        console.log(width)

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    });
        if(width > 1275) {
            return (
                <div className={navstyles.header}>
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
            )
        } else {
            return (
                <div className={navstyles.header}>
                <div className={navstyles.lcontainer2}>
                    <div className={navstyles.tlink}>
                        <h1 className={navstyles.h1}>
                            <Link href={"/"}>
                                <a className={navstyles.linkw}>Scott Styslinger</a>
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
                <Link href={"/cast"}>
                    <a className={navstyles.linkw}>Cast And Crew</a>
                </Link>
            </h2>
            <h2>
                <a className={navstyles.linkw} href="https://www.linkedin.com/in/this-scott/">
                    LinkedIn
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
            <button onClick={() => togglehide()}><img className={navstyles.hambuga} src="/images/Hamburger.png"/></button>
            <div style={{ display: hide ? 'none' : 'block'}} className={navstyles.content}>
                <div className={navstyles.contentbar}>
                    <Link href={"/resume"}>
                        <a>Resume</a>
                    </Link>
                </div>
                <div className={navstyles.contentbar}>
                    <a href="https://github.com/this-scott">
                        Projects
                    </a>
                </div>
                <div className={navstyles.contentbar}>
                    <Link href={"/cast"}>
                        <a>Cast and Crew</a>
                    </Link>
                </div>
                <div className={navstyles.contentbar}>
                    <a href="https://www.linkedin.com/in/this-scott/">LinkedIn</a>
                </div>
            </div>

        </div>
    )
}
