import Navbar from "../components/navbar/navbar";
import Pdfdiv from "../components/pdfdiv/pdfdiv";
import { Document } from "react-pdf";

export default function Resume() {
    return (
        <>
        <Navbar></Navbar>
        <Pdfdiv></Pdfdiv>
        </>
    )
}