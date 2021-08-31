import React from 'react'
// import { Box, Card, Typography } from "@material-ui/core"
// import { SimpleGrid } from '@chakra-ui/layout'

// const useStyles = makeStyles({
//     component: {
//         borderTop: '1px solid #f0f0f0',
//         borderRadius: 0,
//         display: 'flex'
//     },
//     leftComponent:{
//         margin: 20, 
//         display: 'flex',
//         flexDirection: 'column',
//     },
//     rightComponent:{
//         margin: 20,
//         textAlign: "left"
//     },
//     image: {
//         height: 110,
//         width: 110
//     },
//     mid: {
//         margin: 20
//     },
//     greyTextColor: {
//         color: '#878787'
//     },
//     smallText: {
//         fontSize: 14,
//     },
//     price: {
//         fontSize: 18,
//         fontWeight: 600
//     },
//     remove: {
//         marginTop: 20,
//         fontSize: 16
//     }
// })

function Cart({ cartItems, setCartItems }) {
    // const classes = useStyles();
    // const [isLoading, setIsLoading] = useState(false)
    console.log(cartItems)

    return (
        <div>
            {
                /* cartItems[0] &&  cartItems[0].id */
                <img src={cartItems?.image} alt="product" />
            } 
        </div>
    )
}

export default Cart
