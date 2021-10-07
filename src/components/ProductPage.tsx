import { Button } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { Box } from "@mui/system";
import React from "react";
import toast from "react-hot-toast";
import { QueryKey, useQuery } from "react-query";
import { Link } from "react-router-dom";
import axiosConfig from "../config/axios";
import { IProductById } from "../interfaces/Product";
import { ProductPageProps } from "../interfaces/ProductPage";
import Loading from "./Loading";

async function fetchProductsById(productId: string): Promise<IProductById> {
  const res = await axiosConfig.get(`/products/${productId}`);

  const productItem: IProductById = res.data;

  return productItem;
}

const ProductPage: React.FC<ProductPageProps> = ({
  productId,
}: ProductPageProps) => {
  const { status, isLoading, data } = useQuery<IProductById, QueryKey>(
    ["productsById", productId],
    () => fetchProductsById(productId),
    {
      onError: error => {
        if (status === "error") {
          toast.error(`Oop! Something went wrong`);
        }
      },
    }
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Box>
      <p>{data?.items.name}</p>
      <p>{data?.items.price}</p>
      <CardMedia
        component='img'
        height='350'
        width='auto'
        image={data?.items.imageUrl}
        alt={data?.items.name}
      />
      <Button size='medium' variant='contained' component={Link} to='/'>
        Back
      </Button>
    </Box>
  );
};

export default ProductPage;
