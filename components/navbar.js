import Head from 'next/head';
import Link from 'next/link';
import navstyles from './navbar.module.css'

export default function Navbar({}) {
    return (
        <div className={navstyles.header}>
            <div className={navstyles.lcontainer}>
                <div className={navstyles.tlink}>
                    <h1 className={navstyles.h1}>
                        <Link href={"/"}>
                            <a className={navstyles.linkw}>Scott Styslinger:</a>
                        </Link>
                    </h1>
                </div>
                <nav className={navstyles.navcontainer}>
                    <div className={navstyles.links}/*links that are broken rn, to be fixed*/>
                        <h2>
                            <Link href={"/resume"}>
                                <a className={navstyles.linkw}>Resume</a>
                            </Link>
                        </h2>
                        <h2>
                            <Link href={"anotherpageIdon'thave"}>
                                <a className={navstyles.linkw}>Projects</a>
                            </Link>
                        </h2>
                        <h2>
                            <Link href={"anotherpageIdon'thave"}>
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
            </div>
        </div>
    )
}