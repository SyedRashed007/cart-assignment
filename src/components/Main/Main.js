import React  from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import './Main.css'
import { Box, Text } from '@chakra-ui/layout';
import {Image} from '@chakra-ui/image'
import { Button } from "@chakra-ui/react"
import { useHistory } from 'react-router-dom'
import { Input } from '@chakra-ui/input';
import { Link } from 'react-router-dom' 

const Navbar = () =>  {
    return (
        <div>
            <div className="navWrapper">
                <div className="navItemWrapper">
                    <div>
                        <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="Flipkart" width="80px" height="80px"/>
                    </div>
                    <Input  
                        variant="outlined"
                        placeholder="Search"
                        backgroundColor='white'
                        color='black'
                        width='600px'
                        ml='8' />
                </div>
                <Link to="/cart">
                    <Button  color='black' ml={2}>
                        Cart
                    </Button>
                </Link>
                <Button  color='black' ml={2}>
                    More
                </Button>
                <Button  color='black' ml={2}>
                     Sign in/Sign out
                </Button>
            </div>
        </div>
    )
}
function Main({ items }) {
    // console.log(items)

    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div className="container">
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
        </div>
    )
}
const Card = ({ brand, name, price, image }) => {
  const history = useHistory();
//   const [selectedItem, setSelectedItem] = useState()

  const addToCart = () => {
    history.push('/cart')
    // setSelectedItem(selectedItem)
  }
  return (
    <Box>
      <Image src={image} width='300px' height='300px' />
      <Text className='brand'>{brand} </Text>
      <Text className='name'>{name}</Text>
      <Text className='price'>Rs {price}</Text>
      <Button onClick={addToCart}>Add to cart</Button>
    </Box>

  );
};


export default Main
