import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import React, { Profiler } from "react";
import "./ProductCard.css";

const ProductCard = ({ product, handleAddToCart }) => {
  return (
    <Card className="card">
      <CardMedia component="img" alt={product.name} image={product.image}/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
          ${product.cost}
        </Typography>
        <Rating readOnly value={product.rating}/>
      </CardContent>
      {/* <CardActions className="card-actions"> */}

        <Button variant="contained" className="card-button" startIcon={<AddShoppingCartOutlined/>} sx={{ margin: 1 }}>
          ADD TO CART
        </Button>
      {/* </CardActions> */}
    </Card>
  );
};

export default ProductCard;
