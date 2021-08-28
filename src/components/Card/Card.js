import React from 'react'
import { Box, Text } from '@chakra-ui/layout';
import {Image} from '@chakra-ui/image'
import './Card.css';
import { Button } from "@chakra-ui/react"
import { useHistory } from 'react-router-dom'

const Card = ({ brand, name, price, image }) => {
  const history = useHistory();

  const addToCart = () => {
    history.push('/cart')
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

export default Card
