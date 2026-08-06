import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  CreditCard,
  Truck,
  MapPin,
  Phone,
  Building,
  Mail,
  ArrowRight,
  Lock,
} from "lucide-react";
import { toast } from "sonner";
import axios from "axios";
import { useQueryClient } from "@tanstack/react-query";
import * as S from "../styles/PaymentPage.styles";
import { useCartQuery } from "../../cart/hooks/api/useCartQuery";
import { CART_QUERY_KEY } from "../../cart/hooks/api/useCartQuery";
import { API_BASE_URL } from "../../../lib/apiClient";

const DEFAULT_ADDRESS = {
  full_name: "Venu",
  phone: "8438968944",
  address_line: "jfdkjgdbkjd",
  city: "puttur",
  state: "andhrapradesh",
  pincode: "517583",
};

const formatISTDateString = (date) => {
  return date.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
};

const formatPrice = (val) => {
  return `₹${Number(val).toLocaleString("en-IN")}`;
};

const savePlacedOrderToLocalStorage = (checkoutRes, summaryItems, subtotal, selectedMethod) => {
  const firstSummaryItem = summaryItems[0] || {};
  const fallbackId = String(Date.now()).slice(-4);
  const orderId = String(checkoutRes?.data?.order_id || fallbackId);
  const now = new Date();
  const newOrder = {
    id: orderId,
    product_id: firstSummaryItem.product_id || firstSummaryItem.id,
    created_at: formatISTDateString(now),
    raw_date: now.toISOString(),
    product_title: firstSummaryItem.product_title || "ONEPLUS NORD 2",
    variant: "12GB RAM, Standard Variant",
    quantity: firstSummaryItem.quantity || 1,
    price: firstSummaryItem.price || subtotal || 29999,
    total_price: subtotal || 29999,
    status: "PROCESSING",
    delivery_date: "Processing",
    payment_method: selectedMethod === "cod" ? "COD" : "UPI",
    image: firstSummaryItem.image || "https://res.cloudinary.com/dwdvdags5/image/upload/v1780317112/ekart/cd29pm8b7nslyespb6wi.webp",
  };
  localStorage.setItem("last_placed_order", JSON.stringify(newOrder));
};

export default function PaymentPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [selectedMethod, setSelectedMethod] = useState("online");
  const [isProcessing, setIsProcessing] = useState(false);

  const [address, setAddress] = useState(() => {
    const saved = localStorage.getItem("selected_address");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse selected address", e);
      }
    }
    return null;
  });

  const { data: cartItems = [] } = useCartQuery();

  // Load address from backend asynchronously if not cached in localStorage
  useEffect(() => {
    if (address) return;

    const token = localStorage.getItem("access_token");
    if (!token) return;

    let isMounted = true;
    axios
      .get(`${API_BASE_URL}/address`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if (!isMounted) return;
        const list = Array.isArray(res.data) ? res.data : res.data ? [res.data] : [];
        if (list.length > 0) {
          setAddress(list[0]);
          localStorage.setItem("selected_address", JSON.stringify(list[0]));
        }
      })
      .catch((err) => {
        console.warn("Failed to fetch user addresses:", err);
      });

    return () => {
      isMounted = false;
    };
  }, [address]);

  const displayAddress = address || DEFAULT_ADDRESS;

  const summaryItems =
    cartItems.length > 0
      ? cartItems
      : [
          {
            cart_id: 999,
            product_title: "ONEPLUS 15R",
            quantity: 2,
            price: 59999,
            image:
              "https://res.cloudinary.com/dwdvdags5/image/upload/v1780316665/ekart/thgozxpt6vxonsdaz8ba.webp",
          },
        ];

  const subtotal = summaryItems.reduce(
    (acc, item) => acc + (Number(item.price) || 0) * (Number(item.quantity) || 1),
    0
  );

  const clearCartStateAndCache = async () => {
    const token = localStorage.getItem("access_token");
    if (token) {
      try {
        await axios.delete(`${API_BASE_URL}/cart/clear`, {
          headers: { Authorization: `Bearer ${token}` },
        });
      } catch (e) {
        console.warn("Cart clear API call error:", e);
      }
    }
    queryClient.setQueryData(CART_QUERY_KEY, { success: true, data: [] });
    queryClient.setQueryData(["cart"], { success: true, data: [] });
    queryClient.invalidateQueries({ queryKey: CART_QUERY_KEY, refetchType: "all" });
  };

  const handleCompleteOrder = async () => {
    if (isProcessing) return;
    setIsProcessing(true);

    const token = localStorage.getItem("access_token");
    if (!token) {
      toast.error("Please log in to complete your order.");
      setIsProcessing(false);
      return;
    }

    const idempotencyKey = `checkout_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

    // Online Razorpay Payment
    if (selectedMethod === "online") {
      if (!window.Razorpay) {
        toast.error("Razorpay SDK failed to load. Please check your internet connection.");
        setIsProcessing(false);
        return;
      }

      try {
        const response = await axios.post(
          `${API_BASE_URL}/create-payment-order`,
          { amount: subtotal },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Idempotency-Key": idempotencyKey,
            },
          }
        );

        const orderData = response.data;
        const razorpayOrderId = orderData.razorpay_order_id || orderData.id;
        const razorpayKeyId = orderData.key_id || import.meta.env.VITE_RAZORPAY_KEY_ID;

        const options = {
          key: razorpayKeyId,
          amount: orderData.amount,
          currency: orderData.currency || "INR",
          name: "EKARTHUB",
          description: "Order Payment",
          order_id: razorpayOrderId,
          handler: async function (paymentResponse) {
            try {
              const verifyRes = await axios.post(
                `${API_BASE_URL}/verify-payment`,
                {
                  razorpay_order_id: paymentResponse.razorpay_order_id,
                  razorpay_payment_id: paymentResponse.razorpay_payment_id,
                  razorpay_signature: paymentResponse.razorpay_signature,
                },
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                    "Idempotency-Key": `verify_${paymentResponse.razorpay_order_id}`,
                  },
                }
              );

              savePlacedOrderToLocalStorage(verifyRes, summaryItems, subtotal, "online");
              await clearCartStateAndCache();
              toast.success("Payment Successful! Order Placed.");
              navigate("/orders");
            } catch (vErr) {
              console.error("[Razorpay Verification Error]:", vErr);
              const errorMessage =
                vErr.response?.data?.detail?.message ||
                vErr.response?.data?.message ||
                "Payment verification failed. Order was not placed.";
              toast.error(errorMessage);
            } finally {
              setIsProcessing(false);
            }
          },
          modal: {
            ondismiss: function () {
              setIsProcessing(false);
              toast.error("Payment cancelled. Order was not created.");
            },
          },
          theme: { color: "#FF1F1F" },
        };

        const razor = new window.Razorpay(options);
        razor.on("payment.failed", function (response) {
          console.error("[Razorpay Payment Failed]:", response.error);
          setIsProcessing(false);
          toast.error(response.error?.description || "Payment failed. Order was not created.");
        });
        razor.open();
        return;
      } catch (err) {
        console.error("[Razorpay Initialization Error]:", err);
        const errMsg =
          err.response?.data?.detail?.message ||
          err.response?.data?.message ||
          "Failed to initialize Razorpay payment. Please try again.";
        toast.error(errMsg);
        setIsProcessing(false);
        return;
      }
    }

    // Cash on Delivery (COD) Flow
    try {
      const checkoutRes = await axios.post(
        `${API_BASE_URL}/checkout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Idempotency-Key": idempotencyKey,
          },
        }
      );
      savePlacedOrderToLocalStorage(checkoutRes, summaryItems, subtotal, "cod");
      await clearCartStateAndCache();
      toast.success("Order Placed Successfully!");
      navigate("/orders");
    } catch (err) {
      console.error("[COD Checkout Error]:", err);
      const errMsg =
        err.response?.data?.detail?.message ||
        err.response?.data?.message ||
        "Failed to place order. Please try again.";
      toast.error(errMsg);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <S.PageWrapper>
      <S.Container>
        {/* Header Section */}
        <S.HeaderSection>
          <S.Title>PAYMENT</S.Title>
          <S.Subtitle>
            Complete your payment securely to place your order.
          </S.Subtitle>
        </S.HeaderSection>

        <S.MainGrid>
          {/* Left Column: Delivery Address + Payment Method */}
          <S.Column>
            {/* Delivery Address Card */}
            <S.ColumnTitle>DELIVERY ADDRESS</S.ColumnTitle>
            <S.Card>
              <S.AddressHeaderRow>
                <S.CustomerName>{displayAddress.full_name}</S.CustomerName>
                <S.ChangeAddressBtn type="button" onClick={() => navigate("/address")}>
                  CHANGE ADDRESS
                </S.ChangeAddressBtn>
              </S.AddressHeaderRow>

              <S.AddressDetails>
                <S.AddressDetailRow>
                  <Phone size={16} />
                  <span>{displayAddress.phone}</span>
                </S.AddressDetailRow>

                <S.AddressDetailRow>
                  <MapPin size={16} />
                  <span>{displayAddress.address_line}</span>
                </S.AddressDetailRow>

                <S.AddressDetailRow>
                  <Building size={16} />
                  <span>
                    {displayAddress.city}, {displayAddress.state}
                  </span>
                </S.AddressDetailRow>

                <S.AddressDetailRow>
                  <Mail size={16} />
                  <span>{displayAddress.pincode}</span>
                </S.AddressDetailRow>
              </S.AddressDetails>
            </S.Card>

            {/* Payment Options */}
            <S.ColumnTitle style={{ marginTop: "12px" }}>
              SELECT PAYMENT METHOD
            </S.ColumnTitle>
            <S.Card>
              <S.PaymentMethodList>
                <S.PaymentMethodOption
                  isSelected={selectedMethod === "online"}
                  onClick={() => setSelectedMethod("online")}
                >
                  <S.OptionLeft>
                    <S.CustomRadio isSelected={selectedMethod === "online"}>
                      <S.RadioDot isSelected={selectedMethod === "online"} />
                    </S.CustomRadio>
                    <CreditCard size={22} color="#FF1F1F" />
                    <S.MethodMeta>
                      <S.MethodTitle>Online Payment (Razorpay / UPI / Cards)</S.MethodTitle>
                      <S.MethodSubtitle>Credit Card, Debit Card, Net Banking, UPI</S.MethodSubtitle>
                    </S.MethodMeta>
                  </S.OptionLeft>
                  <S.MethodBadge>RECOMMENDED</S.MethodBadge>
                </S.PaymentMethodOption>

                <S.PaymentMethodOption
                  isSelected={selectedMethod === "cod"}
                  onClick={() => setSelectedMethod("cod")}
                >
                  <S.OptionLeft>
                    <S.CustomRadio isSelected={selectedMethod === "cod"}>
                      <S.RadioDot isSelected={selectedMethod === "cod"} />
                    </S.CustomRadio>
                    <Truck size={22} color="#FF1F1F" />
                    <S.MethodMeta>
                      <S.MethodTitle>Cash on Delivery</S.MethodTitle>
                      <S.MethodSubtitle>Pay with cash upon delivery</S.MethodSubtitle>
                    </S.MethodMeta>
                  </S.OptionLeft>
                </S.PaymentMethodOption>
              </S.PaymentMethodList>
            </S.Card>
          </S.Column>

          {/* Right Column: Order Summary */}
          <S.Column>
            <S.ColumnTitle>ORDER SUMMARY</S.ColumnTitle>
            <S.OrderSummaryCard>
              <S.OrderItemList>
                {summaryItems.map((item) => (
                  <S.OrderItemRow key={item.cart_id || item.id || item.product_title}>
                    <S.OrderItemImage
                      src={item.image}
                      alt={item.product_title}
                      onError={(e) => {
                        e.target.src =
                          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=200&q=80";
                      }}
                    />
                    <S.OrderItemMeta>
                      <S.OrderItemName>{item.product_title}</S.OrderItemName>
                      <S.OrderItemQty>Qty: {item.quantity}</S.OrderItemQty>
                    </S.OrderItemMeta>
                    <S.OrderItemPrice>
                      {formatPrice((item.price || 0) * (item.quantity || 1))}
                    </S.OrderItemPrice>
                  </S.OrderItemRow>
                ))}
              </S.OrderItemList>

              <S.CardDivider />

              <S.SummaryRow>
                <span>Subtotal</span>
                <S.SummaryValue>{formatPrice(subtotal)}</S.SummaryValue>
              </S.SummaryRow>

              <S.SummaryRow>
                <span>Shipping</span>
                <S.FreeShippingValue>FREE</S.FreeShippingValue>
              </S.SummaryRow>

              <S.TotalRow>
                <S.TotalLabel>TOTAL</S.TotalLabel>
                <S.TotalAmount>{formatPrice(subtotal)}</S.TotalAmount>
              </S.TotalRow>

              <S.PayNowButton
                type="button"
                disabled={isProcessing}
                onClick={handleCompleteOrder}
              >
                {isProcessing ? "PROCESSING..." : "PAY NOW"}
                <ArrowRight size={18} />
              </S.PayNowButton>

              <S.SecurityNotice>
                <Lock size={14} />
                256-Bit SSL Encrypted & 100% Secure Payment
              </S.SecurityNotice>
            </S.OrderSummaryCard>
          </S.Column>
        </S.MainGrid>
      </S.Container>
    </S.PageWrapper>
  );
}