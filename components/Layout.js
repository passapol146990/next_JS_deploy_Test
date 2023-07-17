import Navbar from "./navbar"
import Footer from "./footer"

export default function Layout({children}){
    return(
        <div>
            <Navbar/>
                {children}
            <Footer/>
        </div>
    )
}