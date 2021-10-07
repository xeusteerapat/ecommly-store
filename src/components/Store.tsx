import { Box } from "@mui/system";
import React from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import axiosConfig from "../config/axios";
import { Product, IProductItems } from "../interfaces/Product";
import Loading from "./Loading";
import ProductItem from "./ProductItem";

async function fetchProducts() {
  const res = await axiosConfig.get("/products");

  return res.data;
}

const Store = () => {
  const { status, isLoading, data } = useQuery<Product>(
    "products",
    fetchProducts,
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
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        bgcolor: "background.paper",
        justifyContent: "center",
      }}
    >
      {data?.items.map((product: IProductItems) => {
        return (
          <ProductItem
            key={product.productId}
            name={product.name}
            productId={product.productId}
            imageUrl={product.imageUrl}
            createdAt={product.createdAt}
            updatedAt={product.updatedAt}
            price={product.price}
          />
        );
      })}
    </Box>
  );
};

export default Store;
