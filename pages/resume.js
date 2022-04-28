import Navbar from "../components/navbar/navbar";
import Pdfdiv from "../components/pdfdiv/pdfdiv";
import { Document } from "react-pdf";
import Bottombar from "../components/bottombar/bottombar";

export default function Resume() {
    return (
        <>
        <Navbar></Navbar>
        <Pdfdiv></Pdfdiv>
        <Bottombar></Bottombar>
        </>
    )
}