import aboutme from './aboutme.module.css'

export default function Aboutme(){
    return (
        <div>
            <div className={aboutme.titlediv}>
                <h1>The About Me will be here in v1</h1>
            </div>
            <div className={aboutme.row}>
                <div className={aboutme.box}>
                    <h1>Roadmap: Bugfixes & More small optimizations -> Getting funky with component rendering -> Fixing Resume on mobile(I blame React-PDF) -> Giving projects an actual page -> Add your own businesscard(that'll be fun) -> and last and very much least: socials in the navbar</h1>
                    <p></p>
                </div>
            </div>
        </div>
    )
}