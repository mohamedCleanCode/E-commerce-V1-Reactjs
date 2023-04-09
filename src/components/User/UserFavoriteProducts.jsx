import React from "react";
import { Row } from "react-bootstrap";
import useUserFavoriteProducts from "../../hook/wishlist/useUserFavoriteProducts";
import ProductCard from "../Products/ProductCard";

const UserFavoriteProducts = () => {
  const [wishlist, loading] = useUserFavoriteProducts();

  return (
    <div>
      <h1>Your Favorite Products</h1>
      <Row>
        {wishlist ? (
          wishlist.data?.length >= 1 ? (
            wishlist.data.map((product) => {
              return <ProductCard product={product} />;
            })
          ) : (
            <p>there are not items yet...!</p>
          )
        ) : (
          <p>loading....</p>
        )}
      </Row>
    </div>
  );
};

export default UserFavoriteProducts;
