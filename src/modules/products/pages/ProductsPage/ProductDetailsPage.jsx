import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiClient, API_BASE_URL, getImageUrl } from "../../../../lib/apiClient";
import axios from "axios";
import * as S from "./ProductDetailsPage.styles";
import {
  Truck,
  ShieldCheck,
  RefreshCw,
  Award,
  Heart,
} from "lucide-react";
import { useAddToCartMutation } from "../../../cart/hooks/api/useCartMutations";
import { useWishlist } from "../../../wishlist/hooks/useWishlist";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { isWishlisted, getWishlistId, addToWishlist, removeFromWishlist } = useWishlist();

  const productId = product?.id || Number(id);
  const activeWishlisted = isWishlisted(productId);
  const wishlistId = getWishlistId(productId);

  const handleWishlistToggle = () => {
    if (activeWishlisted && wishlistId) {
      removeFromWishlist(wishlistId);
    } else {
      addToWishlist(productId);
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await apiClient(
          `/products/${id}`
        );

        setProduct(response.data);
      } catch (error) {
        console.error(
          "Failed to fetch product:",
          error
        );
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  useEffect(() => {
    if (!product?.id) return;

    apiClient(
      `/products/${product.id}/view`,
      {
        method: "POST",
      }
    ).catch((error) => {
      console.error(
        "Failed to track product view:",
        error
      );
    });
  }, [product?.id]);


  const addToCartMutation = useAddToCartMutation();


    const handleAddToCart = () => {
      addToCartMutation.mutate({
        productId: product.id,
        quantity: 1,
      });
    };
  const handlePayment = async () => {
    try {
    const response = await axios.post(
      `${API_BASE_URL}/create-order`,
      {
        amount: product.price,
      }
    );
      console.log("ORDER:", response.data);

      const order = response.data;

      const options = {
        key: "rzp_test_SeuwTZHoUlo6gg",
        amount: order.amount,
        currency: order.currency,
        name: "E-Kart",
        description: product.title,
        order_id: order.id,

        handler: function (response) {
          alert(
            "Payment Successful!\nPayment ID: " +
              response.razorpay_payment_id
          );
        },

        theme: {
          color: "#2563eb",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error(error);
      alert("Payment Failed");
    }
  };

  if (isLoading) return <h2>Loading...</h2>;

  if (!product) return <h2>Product Not Found</h2>;

  const imageUrl = getImageUrl(product.image);

  return (
    <S.PageWrapper>
      <S.ProductContainer>
        <S.ImageCard>
          <img src={imageUrl} alt={product.title} />
        </S.ImageCard>

        <S.DetailsCard>
          <S.Badge>✓ In Stock</S.Badge>

          <S.ProductTitle>
            {product.title}
          </S.ProductTitle>

          <S.Rating>
            ★★★★★
            <span>4.8 Rating • 10 Reviews</span>
          </S.Rating>

          <S.Price>
            ₹{product.price}
          </S.Price>

          <S.Description>
            {product.description}
          </S.Description>

          <S.Features>
            <div><Truck size={18} /> Free Delivery</div>
            <div><ShieldCheck size={18} /> Secure Payment</div>
            <div><RefreshCw size={18} /> Easy Returns</div>
            <div><Award size={18} /> Premium Quality</div>
          </S.Features>

          <S.ButtonGroup>
            <S.AddToCartButton
              onClick={handleAddToCart}
            >
              Add To Cart
            </S.AddToCartButton>

            <S.WishlistButton
              $isWishlisted={activeWishlisted}
              onClick={handleWishlistToggle}
              aria-label={activeWishlisted ? "Remove from wishlist" : "Add to wishlist"}
            >
              <Heart
                size={20}
                fill={activeWishlisted ? "#e60000" : "none"}
                color={activeWishlisted ? "#e60000" : "currentColor"}
              />
              {activeWishlisted ? "Wishlisted" : "Wishlist"}
            </S.WishlistButton>
            
            <S.BuyNowButton
              onClick={handlePayment}
            >
              Buy Now
            </S.BuyNowButton>
          </S.ButtonGroup>
        </S.DetailsCard>
      </S.ProductContainer>
    </S.PageWrapper>
  );
}

