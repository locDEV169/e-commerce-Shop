import React from 'react'
import Grid from '@material-ui/core';

const products =[
    {id:1, name:'Shoes', descripton:'running shoes',price:"$5"},
    {id:2,name:'Macbook', descripton:'Apple macbook',price:"$5"}
]

const Products =() => {
    <main>
        <Grid container justify="center" spacing={4}>
            {products.map((products) => {
                <Grid item key={products.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/>
                </Grid>
            })}
        </Grid>
    </main>
}