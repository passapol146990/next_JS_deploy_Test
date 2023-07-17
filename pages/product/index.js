import phon from '@/styles/phon.module.css'
import Image from "next/image"
import Link from "next/link"

export async function getStaticProps(){
    const res = await fetch("https://dummyjson.com/products?limit=12")
    const data = await res.json()
    return{
        props:{products:data.products}
    }
}
export default function Index({products}){
    return(
        <div>
            <h2 className='text-center'>สินค้า</h2>
            <div className={phon.container}>
                {products.map(item=>(
                <div key={item.id}>
                    <Link href={'/product/'+item.id}>
                        <h2 className={phon.title}>{item.title} | {item.price}</h2>
                        <Image src={item.thumbnail} width={300} height={300}/>
                    </Link>
                </div>
                ))}
            </div>
        </div>
    )
}