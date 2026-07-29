import { ShoppingCart, Heart, Zap } from "lucide-react";
import * as S from "./ProductDetails.styles";

export default function ActionButtons({
  onAddToCart,
  onWishlistToggle,
  onBuyNow,
  isWishlisted = false,
  isAddingToCart = false,
  isProcessingBuy = false,
}) {
  return (
    <S.ButtonsRow>
      <S.AddToCartBtn
        type="button"
        onClick={onAddToCart}
        disabled={isAddingToCart}
        aria-label="Add to cart"
      >
        <ShoppingCart size={18} />
        {isAddingToCart ? "ADDING..." : "ADD TO CART"}
      </S.AddToCartBtn>

      <S.WishlistBtn
        type="button"
        onClick={onWishlistToggle}
        $isWishlisted={isWishlisted}
        aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
      >
        <Heart
          size={18}
          fill={isWishlisted ? "#FF1F1F" : "none"}
          color="#FF1F1F"
        />
        {isWishlisted ? "WISHLISTED" : "WISHLIST"}
      </S.WishlistBtn>

      <S.BuyNowBtn
        type="button"
        onClick={onBuyNow}
        disabled={isProcessingBuy}
        aria-label="Buy now"
      >
        <Zap size={18} />
        {isProcessingBuy ? "PROCESSING..." : "BUY NOW"}
      </S.BuyNowBtn>
    </S.ButtonsRow>
  );
}
