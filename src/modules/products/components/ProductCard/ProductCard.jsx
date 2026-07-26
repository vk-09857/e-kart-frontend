import * as S from "./ProductCard.styles";
import { useAddToCartMutation } from "../../../cart/hooks/api/useCartMutations";
import { useCartQuery } from "../../../cart/hooks/api/useCartQuery";
import { useNavigate } from "react-router-dom";
import {
  useWishlistQuery,
} from "../../../wishlist/api/useWishlistQuery";

import {
  useAddToWishlistMutation,
  useRemoveFromWishlistMutation,
} from "../../../wishlist/api/useWishlistMutations";
import { Heart } from "lucide-react";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  const {
    id,
    title,
    price,
    description,
    category,
    image,
  } = product;

  const { mutate: addToCart, isPending } =
    useAddToCartMutation();

  const { data: cartItems = [] } =
    useCartQuery();

  const { data: wishlistItems = [] } =
    useWishlistQuery();

  const {
    mutate: addToWishlist,
  } = useAddToWishlistMutation();

  const {
    mutate: removeFromWishlist,
  } = useRemoveFromWishlistMutation();

  const isAdded = cartItems.some(
    (item) => item.product_title === title
  );

  const wishlistItem = wishlistItems.find(
    (item) => item.product_id === id
  );

  const isWishlisted = !!wishlistItem;

  const handleAddToCart = () => {
    if (!isAdded) {
      addToCart({
        productId: id,
        quantity: 1,
      });
    }
  };

  const handleWishlist = () => {

    if (isWishlisted) {

      removeFromWishlist(
        wishlistItem.wishlist_id
      );

    } else {

      addToWishlist(id);

    }

  };

  const handleViewProduct = () => {
    navigate(`/products/${id}`);
  };

  const imageUrl = image?.startsWith("http")
    ? image
    : `${import.meta.env.VITE_API_URL}${image}`;
  console.log(product);
  return (
    <S.Card>
      <S.ImageWrapper
        onClick={handleViewProduct}
        style={{ cursor: "pointer" }}
      >
        <S.WishlistButton
          onClick={(e) => {
            e.stopPropagation();
            handleWishlist();
          }}
        >
          <Heart
            size={20}
            fill={isWishlisted ? "#e60000" : "none"}
            color={isWishlisted ? "#e60000" : "#ffffff"}
          />
        </S.WishlistButton>

        {image ? (
          <img
            src={imageUrl}
            alt={title}
          />
        ) : (
          <span
            style={{
              color: "var(--color-mute)",
            }}
          >
            No Image
          </span>
        )}
      </S.ImageWrapper>

      <S.Content>
        <S.Category>{category}</S.Category>

        <S.Title
          onClick={handleViewProduct}
          style={{ cursor: "pointer" }}
        >
          {title}
        </S.Title>

        <S.Description>
          {description}
        </S.Description>

        <S.Footer>
          <S.Price>
            ₹{price.toLocaleString()}
          </S.Price>

          <S.Button
            onClick={handleAddToCart}
            disabled={isPending || isAdded}
            style={
              isAdded
                ? {
                  backgroundColor:
                    "var(--color-success)",
                  cursor: "default",
                }
                : {}
            }
          >
            {isPending
              ? "Adding..."
              : isAdded
                ? "Added"
                : "Add to Cart"}
          </S.Button>
        </S.Footer>
      </S.Content>
    </S.Card>
  );
}