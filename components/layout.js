import Navbar from "./navbar/navbar";
import Footer from "./bottombar/bottombar";

export default function Layout({children}) {
    return (
        <>
            <Navbar/>
            <main>{children}</main>
            <Footer />
        </>
    )
}