import aboutme from './aboutme.module.css'

export default function Aboutme(){
    return (
        <div>
            <div className={aboutme.titlediv}>
                <h1>About Me</h1>
            </div>
            <div className={aboutme.row}>
                <div className={aboutme.box}>
                    <h1>The Origins</h1>
                    <p></p>
                </div>
            </div>
        </div>
    )
}