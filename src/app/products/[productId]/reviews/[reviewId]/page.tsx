import React from "react";

const Reviews = ({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) => {
  const { reviewId, productId } = params;
  return (
    <h1>
      Review {reviewId} for Product {productId}
    </h1>
  );
};

export default Reviews;
