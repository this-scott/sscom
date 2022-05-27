import aboutme from './aboutme.module.css'

export default function Aboutme(){

    /*Add sections to this compoent
    1. Who am I
    2. What do I do
    3. What is this page
    */
    return (
        <div>
            <div className={aboutme.titlediv}>
                <h1>More Updates Coming Soon</h1>
            </div>
            <div className={aboutme.row}>
                <div className={aboutme.box}>
                    <h1>Still have a lot of work to do on this</h1>
                    <p></p>
                </div>
            </div>
        </div>
    )
}