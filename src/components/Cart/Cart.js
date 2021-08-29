import React, { useEffect, useState } from 'react'
import { Box, Card, Typography } from "@material-ui/core"

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

function Cart({ items }) {
    // const classes = useStyles();
    const [selectedItem, setSelectedItem] = useState(items)

    const Item = () => {
        setSelectedItem(items)
    }
    useEffect(() => {
        Item();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedItem]);

    return (
        <Card >
            <Box src={items?.image}>
                <img src={items?.image} alt="Product" />
            </Box>
            <Box>
                <Typography>{items?.description}</Typography>
                 <Typography style={{margin: '20px 0'}}>
                    <span >₹{items?.price}</span>
                </Typography>
            </Box>
        </Card>
    )
}

export default Cart
