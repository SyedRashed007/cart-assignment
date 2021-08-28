import React from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import Card from '../Card/Card'
import './Main.css'


function Main({ items }) {
    console.log(items)
    
    return (
        <div>
        <p>Home {'>'} Categories</p>
        <span className="small">Given how powerful social media has become these days, everyone around the world wants to look their best at all times. Thus, the right clothing and accessories are almost always in demand. Good-quality shirts, T-shirts, trousers, jeans, shorts, tops, sarees, kurtis, lehenga, dresses, skirts, bra, innerwear, and more are some of the examples that people love and need to wear. Watches, earrings, rings, bracelets, chains, etc can accentuate the look of every outfit. Thus, it’s important to wear complementing accessories when you dress up in your finest.</span>
            <p>Clothing And Accessories(Showing 1 – 9 of 9 products)</p>
            <SimpleGrid columns={3} spacingY={12} mt={5}>
                {items?.map((a) => (
                    <Card
                    key={a.id}
                    brand={a.brand}
                    name={a.name}
                    price={a.price}
                    image={a.image}
                    />
                ))}
            </SimpleGrid>
        </div>
    )
}

export default Main
