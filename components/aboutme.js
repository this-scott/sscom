import aboutme from './aboutme.module.css'

export default function Aboutme(){
    return (
        <div>
            <div className={aboutme.titlediv}>
                <h1>The 'About Me' will be here in v1</h1>
            </div>
            <div className={aboutme.row}>
                <div className={aboutme.box}>
                    <h1>Web dev sucks</h1>
                    <p></p>
                </div>
            </div>
        </div>
    )
}