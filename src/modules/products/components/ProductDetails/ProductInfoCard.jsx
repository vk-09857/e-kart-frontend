import FeatureGrid from "./FeatureGrid";
import QuantitySelector from "./QuantitySelector";
import ActionButtons from "./ActionButtons";
import * as S from "./ProductDetails.styles";

export default function ProductInfoCard({
  product,
  quantity,
  onIncrementQuantity,
  onDecrementQuantity,
  onAddToCart,
  onWishlistToggle,
  onBuyNow,
  isWishlisted = false,
  isAddingToCart = false,
  isProcessingBuy = false,
}) {
  const formattedPrice = `₹${Number(product?.price || 59999).toLocaleString("en-IN")}`;

  return (
    <S.InfoCard>
      {/* Top Badge */}
      <S.StockBadge>✓ In Stock</S.StockBadge>

      {/* Product Title */}
      <S.Title>{product?.title || "ONEPLUS 15R"}</S.Title>

      {/* ============================================================
          PRODUCT REVIEWS SECTION
          TEMPORARILY DISABLED

          Reason:
          Reviews feature will be implemented later after completing
          the core e-commerce functionality.

          DO NOT DELETE THIS CODE.
          Uncomment this entire section when the Reviews feature
          is ready for implementation.
      ============================================================= */}
      {/* 
      <S.RatingRow>
        <div className="stars">★ ★ ★ ★ ★</div>
        <span className="text">4.8 Rating • 10 Reviews</span>
      </S.RatingRow>
      */}

      {/* Price Section */}
      <S.PriceRow>
        <div className="main-price">{formattedPrice}</div>
        <div className="sub-desc">{product?.category ? `${product.category} Product` : "Oneplus Product"}</div>
      </S.PriceRow>

      {/* Product Description */}
      {product?.description && (
        <S.DescriptionText>{product.description}</S.DescriptionText>
      )}

      {/* Feature Grid (4 Cards) */}
      <FeatureGrid />

      {/* Divider */}
      <S.Divider />

      {/* Quantity Selector & Action Buttons */}
      <S.ControlsSection>
        <QuantitySelector
          quantity={quantity}
          onIncrement={onIncrementQuantity}
          onDecrement={onDecrementQuantity}
        />

        <ActionButtons
          onAddToCart={onAddToCart}
          onWishlistToggle={onWishlistToggle}
          onBuyNow={onBuyNow}
          isWishlisted={isWishlisted}
          isAddingToCart={isAddingToCart}
          isProcessingBuy={isProcessingBuy}
        />
      </S.ControlsSection>
    </S.InfoCard>
  );
}
