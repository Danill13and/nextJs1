import { useRouter } from "next/router";
import Image from "next/image";
import styles from "./id.module.css";


const products = [
    {
      name: "Roblox Premium",
      price: '2.99',
      url: "/Roblox_premium_blog_post.webp"
    },
    {
      name: "XBOX Gamepass",
      price: '4.49',
      url: "/Roblox_premium_blog_post.webp"
    },
    {
      name: "EA Play Pro 12 Months",
      price: '19.99',
      url: "/Roblox_premium_blog_post.webp"
    },
    {
      name: "Pudge",
      price: '14.99',
      url: "/Roblox_premium_blog_post.webp"
    },
    {
      name: "Minecraft Realms",
      price: '1.99',
      url: "/Roblox_premium_blog_post.webp"
    }
]
export default function ProductDynamicID(){

    const router = useRouter()
    const {id} = router.query

    return(
        <main className={styles.main}>
            { id && 
            <div className={styles.main_block_style}>
              
            {/* <p>{JSON.stringify(products[id])}</p> */}
            <Image className={styles.image} src={products[id]['url']} width={300} height={150} alt="No Image"/>
            <h3 className={styles.name} >{products[id]['name']}</h3>
            <p className={styles.price} >${products[id]['price']}</p>
            <a className={styles.back} href="/">Back</a>
            </div>
            
            }
        </main>
    )
}