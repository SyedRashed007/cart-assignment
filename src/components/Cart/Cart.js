import React from 'react'
import { Box, Card, makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles({
    component: {
        borderTop: '1px solid #f0f0f0',
        borderRadius: 0,
        display: 'flex'
    },
    leftComponent:{
        margin: 20, 
        display: 'flex',
        flexDirection: 'column',
    },
    rightComponent:{
        margin: 20,
        textAlign: "left"
    },
    image: {
        height: 110,
        width: 110
    },
    mid: {
        margin: 20
    },
    greyTextColor: {
        color: '#878787'
    },
    smallText: {
        fontSize: 14,
    },
    price: {
        fontSize: 18,
        fontWeight: 600
    },
    remove: {
        marginTop: 20,
        fontSize: 16
    }
})

function Cart({ items, setItem }) {
    const classes = useStyles();

    return (
        <Card className={classes.component}>
            <Box className={classes.leftComponent}>
                <img src={setItem?.image} alt="Product" className={classes.image}></img>
            </Box>
            <Box className={classes.rightComponent}>
                <Typography>{items?.description}</Typography>
                 <Typography style={{margin: '20px 0'}}>
                    <span className={classes.price}>₹{items?.price}</span>
                </Typography>
            </Box>
        </Card>
    )
}

export default Cart
