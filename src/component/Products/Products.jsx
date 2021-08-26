import React from 'react'
import {Grid} from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

// const products =[
//     {id:1, name:'Shoes', description:'running shoes',price:"$5",image:'https://i.pinimg.com/originals/3d/b9/3a/3db93a893f0bbae0a7194daed729e22e.jpg'},
//     {id:2,name:'Macbook', description:'Apple macbook',price:"$5",image:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mbt-gt18-lead-1528903698.jpg?resize=980:*'}
// ]

const Products =({products}) => {
    const classes = useStyles();
    //console.log("s",products)
    return(
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container justifyContent="center" spacing={4}>
                {products.map((product) => {
                    return(
                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                            <Product product={product}/>
                        </Grid>
                    )
                })}
            </Grid>
        </main>
    )
}
export default Products;