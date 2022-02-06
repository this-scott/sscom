import resustyle from "./resume.module.css"
import { Document, Page } from "react-pdf"

//miniheader fights navbar for top spot, use js to make them both sticky
export default function Pdfdiv() {

    return (
        <>
        <div className={resustyle.bigcontainer}>
            <div className={resustyle.miniheader}>
                <div className={resustyle.minibar}>
                        <p>I might throw my old one on here for content</p>
                    <div className={resustyle.miniminibar}>
                        <h4>Want a Copy?</h4>
                        <div className={resustyle.div2}><a href="/documents/resume.pdf" download="ScottStyslingerResume.pdf">
                            Download it Here!</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={resustyle.resume}>
                <Document file="/documents/resume.pdf" onLoadSuccess={console.log("suc")} onLoadError={console.error}>
                    <Page pageNumber={1}/>
                </Document>
            </div>
        </div>
        </>
    )
}