import { Card } from "@mui/material";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import React from "react";
import { IProductItems } from "../interfaces/Product";

const ProductItem: React.FC<IProductItems> = ({
  productId,
  name,
  imageUrl,
  price,
}: IProductItems) => {
  return (
    <Box sx={{ marginTop: 3, maxWidth: 400, flex: "0 0 33.333333%" }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component='img'
          height='250'
          width='auto'
          image={imageUrl}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant='h6' component='div'>
            {name}
          </Typography>
          <Typography gutterBottom variant='h6' component='div'>
            ${price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='medium' variant='contained'>
            View
          </Button>
          <Button size='medium' variant='contained'>
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ProductItem;
