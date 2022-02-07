import aboutme from './aboutme.module.css'

export default function Aboutme(){
    return (
        <div>
            <div className={aboutme.titlediv}>
                <h1>The About Me will be here in v1</h1>
            </div>
            <div className={aboutme.row}>
                <div className={aboutme.box}>
                    <h1>Roadmap: mobile optimizations then prerendering to improve load speeds. Projects gets updated after</h1>
                    <p></p>
                </div>
            </div>
        </div>
    )
}