import Image from "next/image";
import styles from "./page.module.css";
import { metadata } from "./layout";
import { format } from 'react-string-format';
import React from "react";
export default function Home() {
  const products = [
    {
      id: 0,
      name: "Roblox Premium",
      price: '2.99',
      url: "/Roblox_premium_blog_post.webp"
    },
    {
      id: 1,
      name: "XBOX Gamepass",
      price: '4.49',
      url: "/Roblox_premium_blog_post.webp"
    },
    {
      id: 2,
      name: "EA Play Pro 12 Months",
      price: '19.99',
      url: "/Roblox_premium_blog_post.webp"
    },
    {
      id: 3,
      name: "Pudge",
      price: '14.99',
      url: "/Roblox_premium_blog_post.webp"
    },
    {
      id: 4,
      name: "Minecraft Realms",
      price: '1.99',
      url: "/Roblox_premium_blog_post.webp"
    }
  ]
  return (
    <main className={styles.main}>
      <h1 className={styles.h}>GameShop</h1>
        <div className={styles.all}> 
        {
          products.map((product, index)=>{
            return(
              <div key={index} className={styles.block}>
                <Image src={product.url} width={300} height={150} alt="No Image"/>
                <p  className={styles.p} >Price: {product.price}$</p>
                <a className={styles.a} href={format("/{0}",product.id)}><h3>{product.name}</h3></a>
              </div>
            )
          })
      }
      </div>
    </main>
  );
}
