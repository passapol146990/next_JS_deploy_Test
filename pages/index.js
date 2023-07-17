import styles from "@/styles/Home.module.css"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"

export default function Home({products}){
    return(
        <div className={styles.container}>
            <Head>
                <title>พัสพลเว็บไซด์</title>
            </Head>
            <h1>หน้าแรก</h1>
            <Image src='/ezimage.jpg' width={320} height={70} alt='logo2' />
            <p>ยินดีต้อนรับเข้าสู่ พัสพล เว็บไซด์</p>
            <Link href='/product' className="btn-dark">ดูผลงาน</Link>
        </div>
    )
}