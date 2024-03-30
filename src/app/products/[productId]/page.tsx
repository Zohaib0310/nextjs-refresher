import React from "react";

const ProductDetails = ({
  params,
}: {
  params: {
    productId: string;
  };
}) => {
  return <h1>Details of product having id: {params.productId} </h1>;
};

export default ProductDetails;
