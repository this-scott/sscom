import aboutme from './aboutme.module.css'

export default function Aboutme(){
    return (
        <div>
            <div className={aboutme.titlediv}>
                <h1>The About Me will be here in v1</h1>
            </div>
            <div className={aboutme.row}>
                <div className={aboutme.box}>
                    <h1>I have 16 hours of screen recorded video of me making this, fml</h1>
                    <p></p>
                </div>
            </div>
        </div>
    )
}