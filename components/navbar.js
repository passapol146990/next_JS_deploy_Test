import Link from "next/link"
import Image from "next/image"
export default function Navbar(){
    return(
        <nav className="nav-head">
            <div>
                <Link href='/' >
                    <Image className="logo" src='/ez.jpg' width={60} height={60}></Image>
                </Link>
            </div>
            <div className="nav-item">
                <ul>
                    <Link href='/about'>about</Link>
                    <Link href='/product'>product</Link>
                    <Link href='/contact'>contact</Link>
                </ul>
            </div>
        </nav>
    )
}