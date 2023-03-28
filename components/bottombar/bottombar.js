import bbar from './bbar.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Bottombar() {
    return (
        <footer className={bbar.barcontainer}>
            <div className={bbar.socials}>
                <h2 className={bbar.ntitle}>Socials</h2>
                <div className={bbar.sicondiv}>
                    <div className={bbar.simg}>
                        <a href='https://www.instagram.com/this_scott700/'>
                        <Image src="/images/insta2.png" layout='fill'></Image>
                        </a>
                    </div>
                    <div className={bbar.simg}>
                        <a href='https://www.linkedin.com/in/this-scott/'>
                        <Image src="/images/linkedin.png" layout='fill'></Image>
                        </a>
                    </div>
                </div>
            </div>
            <div className={bbar.links}>
                <h2 className={bbar.ntitle}>Pages</h2>
                <Link href={"/resume"}>
                    <a className={bbar.linktext}>Resume</a>
                </Link>
                <a className={bbar.linktext} href="https://github.com/this-scott">
                    Projects
                </a>
                <Link href={"/cast"}>
                    <a className={bbar.linktext}>About Me</a>
                </Link>
                <a className={bbar.linktext} href="https://www.linkedin.com/in/this-scott/">
                    LinkedIn
                </a>
                <Link href={"/niceone"}>
                        <a><div className={bbar.linktext}>Shhhhh</div></a>
                    </Link>
            </div>
        </footer>
    )
}