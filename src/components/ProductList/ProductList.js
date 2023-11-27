import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsRequest } from '../../redux/actions';
import ProductCard from '../ProductCard/ProductCard';
import { Grid } from '@mui/material';

import "./ProductList.scss";

const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const searchResults = useSelector((state) => state.search.results);

    useEffect(() => {
        dispatch(fetchProductsRequest());
    }, [dispatch]);

    const displayProducts = searchResults.length > 0 ? searchResults : products;

    return (
        <div className='fruit-list'>
            <Grid container spacing={3} className='fruit-list-body'>
                {displayProducts.map((product) => (
                    <Grid item xs={6} lg={3} key={product.id}>
                        <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default ProductList;
