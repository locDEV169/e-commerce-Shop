import React from 'react'
import { Card,CardMedia,CardContent,CardAction, Typography, IconButton } from '@material-ui/core'
import {AddShoppingCart} from '@material-ui/core'

const Product = () =>{
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image='' title={product.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography className={classes.cardContent}>
                        {product.name}
                    </Typography>
                    <Typography variant="h5">
                        {product.price}
                    </Typography>
                </div>
            </CardContent>
        </Card>
    )
}
export default Product