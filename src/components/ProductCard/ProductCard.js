
import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, IconButton, Grid } from '@mui/material';
import { Add, Remove, Star, Visibility, FavoriteBorder, ShoppingCart } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { addToCartRequest, addToCartSuccess, addToCartFailure } from '../../redux/actions'; 

import "./ProductCard.scss";

const ProductCard = ({ product }) => {
  const { id, name, price, originalPrice, rating, image, discount, numberOfRatings } = product;

  const [quantity, setQuantity] = useState(0);

  const dispatch = useDispatch();

  // const handleAddToCart = () => {
  //   if (quantity > 0) {
  //     const item = {
  //       id: id,
  //       quantity,
  //       name,
  //       price,
  //     };
  //     dispatch(addToCartRequest(item));
  //     setQuantity(0);
  //     console.log("item",item)
  //   }
  // };
  const handleAddToCart = async () => {
    if (quantity > 0) {
      const item = {
        id: id,
        quantity,
        name,
        price,
      };
  
      try {
        await dispatch(addToCartRequest(item));
        
        dispatch(addToCartSuccess(item)); 
        setQuantity(0);
      } catch (error) {
        dispatch(addToCartFailure(error)); 
        console.error("Failed to add item to cart:", error);
      }
    }
  };
  

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const renderRatingStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<Star key={i} className='active-star' />);
      } else {
        stars.push(<Star key={i} className='passive-star' />);
      }
    }
    return stars;
  };

  return (
    <Card className='product-card' id={id}>
      <CardMedia component="img" height="350" image="https://fastly.picsum.photos/id/1080/5000/3335.jpg?hmac=f3IGc_xKMhNBScyKii5v-BBFTRReM46kzAkt2PijkqM" alt={name} />
      <span className='discount-span'>{discount}</span>
      <Grid container className='product-action'>
        <Grid item >
          <Visibility />
        </Grid>
        <Grid item >
          <FavoriteBorder />
        </Grid>
        <Grid item id="addToCart" onClick={handleAddToCart}>
          <ShoppingCart />
        </Grid>
      </Grid>
      <CardContent position="relative" sx={{ textAlign: 'left', py: 1, px: 1 }}>
        <Typography variant="h6" className='product-title'>
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" className='product-rating' gutterBottom>
          {renderRatingStars()} &nbsp; ({rating})
        </Typography>
        <Typography variant="body1" className='product-price'>
          ${price} <span className='original-price'>${originalPrice}</span>
        </Typography>

        <Grid container alignItems="center" className='product-count'>
          {quantity > 0 ? (
            <>
              <Grid item className='quantity-button remove-button'>
                <IconButton aria-label="subtract from cart" onClick={handleDecrement}>
                  <Remove />
                </IconButton>
              </Grid>
              <Grid item className='quantity-amount'>
                {quantity}
              </Grid>
            </>
          ) : null}
          <Grid item className='quantity-button add-button'>
            <IconButton aria-label="add to cart" onClick={handleIncrement}>
              <Add />
            </IconButton>
          </Grid>
        </Grid>


      </CardContent>
    </Card>
  );
};

export default ProductCard;
