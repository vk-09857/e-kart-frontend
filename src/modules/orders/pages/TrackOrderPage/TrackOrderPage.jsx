import { useState, useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import {
  ShoppingBag,
  Package,
  Truck,
  MapPin,
  CheckCircle2,
  Calendar,
  Copy,
  RotateCcw,
  Check,
} from "lucide-react";
import { toast } from "sonner";
import axios from "axios";
import * as S from "../../styles/TrackOrderPage.styles";
import StatusBadge from "../../components/StatusBadge";
import { calculateLiveTrackingTimeline, formatISTDateString, getLiveISTOrders } from "../../../../shared/utils/dateUtils";
import { API_BASE_URL, getImageUrl } from "../../../../lib/apiClient";

export default function TrackOrderPage() {
  const { id } = useParams();
  const location = useLocation();
  const orderId = id || "5";
  const [copied, setCopied] = useState(false);

  // Match order from location state or live defaults
  const liveDefaults = getLiveISTOrders();
  const matchedOrder = location.state?.order || liveDefaults.find((o) => String(o.id) === String(orderId));

  const [orderCreatedDate, setOrderCreatedDate] = useState(() => {
    if (matchedOrder?.raw_date) return new Date(matchedOrder.raw_date);
    return new Date(Date.now() - 5 * 24 * 60 * 60 * 1000);
  });

  const [orderData, setOrderData] = useState(() => {
    if (matchedOrder) {
      return {
        id: String(matchedOrder.id),
        product_title: matchedOrder.product_title || "ONEPLUS 15R",
        variant: matchedOrder.variant || "12GB RAM, Standard Variant",
        quantity: matchedOrder.quantity || 1,
        price: matchedOrder.price || matchedOrder.total_price || 59999,
        total_price: matchedOrder.total_price || 59999,
        status: (matchedOrder.status || "PROCESSING").toUpperCase(),
        payment_method: matchedOrder.payment_method || "UPI",
        courier: "Delhivery",
        tracking_id: "149856325896",
        image: matchedOrder.image || "https://res.cloudinary.com/dwdvdags5/image/upload/v1780316665/ekart/thgozxpt6vxonsdaz8ba.webp",
      };
    }
    return {
      id: orderId,
      product_title: "ONEPLUS 15R",
      variant: "12GB RAM, 256GB Storage",
      quantity: 2,
      price: 59999,
      total_price: 119998,
      status: "DELIVERED",
      payment_method: "UPI",
      courier: "Delhivery",
      tracking_id: "149856325896",
      image: "https://res.cloudinary.com/dwdvdags5/image/upload/v1780316665/ekart/thgozxpt6vxonsdaz8ba.webp",
    };
  });

  useEffect(() => {
    const fetchOrderDetails = async () => {
      let productsMap = {};
      try {
        const prodRes = await axios.get(`${API_BASE_URL}/products?limit=100`);
        const prodList = prodRes.data?.data || (Array.isArray(prodRes.data) ? prodRes.data : []);
        prodList.forEach((p) => {
          if (p.id) productsMap[String(p.id)] = p;
          if (p.title) productsMap[p.title.toUpperCase()] = p;
        });
      } catch (e) {
        console.warn("Products sync notice:", e);
      }

      const getLatestProdImage = (prodId, prodTitle, defaultImg) => {
        const keyId = prodId ? String(prodId) : "";
        const keyTitle = prodTitle ? String(prodTitle).toUpperCase() : "";
        const liveProd = productsMap[keyId] || productsMap[keyTitle];
        if (liveProd?.image) return getImageUrl(liveProd.image);
        if (defaultImg) return getImageUrl(defaultImg);
        return "https://res.cloudinary.com/dwdvdags5/image/upload/v1780316665/ekart/thgozxpt6vxonsdaz8ba.webp";
      };

      const token = localStorage.getItem("access_token");
      if (!token) {
        setOrderData((prev) => ({
          ...prev,
          image: getLatestProdImage(prev.product_id, prev.product_title, prev.image),
        }));
        return;
      }
      try {
        const response = await axios.get(`${API_BASE_URL}/orders`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (Array.isArray(response.data)) {
          const match = response.data.find(
            (o) => String(o.order_id || o.id) === String(orderId)
          );
          if (match) {
            const firstProd = match.products?.[0] || {};
            if (match.created_at) {
              setOrderCreatedDate(new Date(match.created_at));
            }
            setOrderData({
              id: String(match.order_id || match.id),
              product_id: firstProd.product_id,
              product_title: firstProd.product_title || "ONEPLUS 15R",
              variant: "12GB RAM, Standard Variant",
              quantity: firstProd.quantity || 1,
              price: firstProd.price || match.total_price || 59999,
              total_price: match.total_price || 119998,
              status: (match.status || "PROCESSING").toUpperCase(),
              payment_method: "UPI",
              courier: "Delhivery",
              tracking_id: "149856325896",
              image: getLatestProdImage(firstProd.product_id, firstProd.product_title, firstProd.image),
            });
          }
        }
      } catch (err) {
        console.error("Error fetching order detail:", err);
        setOrderData((prev) => ({
          ...prev,
          image: getLatestProdImage(prev.product_id, prev.product_title, prev.image),
        }));
      }
    };

    fetchOrderDetails();
  }, [orderId]);

  const liveTimeline = calculateLiveTrackingTimeline(orderCreatedDate, orderData.status);

  const handleCopyTracking = () => {
    navigator.clipboard.writeText(orderData.tracking_id || "149856325896");
    setCopied(true);
    toast.success("Tracking ID copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleBuyAgain = () => {
    toast.success(`Added ${orderData.product_title} to cart!`);
  };

  const formatPrice = (val) => `₹${Number(val).toLocaleString("en-IN")}`;

  // 5 Timeline Steps matching Reference Image 1
  const steps = [
    {
      title: "ORDER PLACED",
      time: "26 May 2026, 10:30 AM",
      icon: ShoppingBag,
      isCompleted: true,
    },
    {
      title: "CONFIRMED",
      time: "26 May 2026, 11:10 AM",
      icon: Package,
      isCompleted: true,
    },
    {
      title: "SHIPPED",
      time: "27 May 2026, 03:25 PM",
      icon: Truck,
      isCompleted: true,
    },
    {
      title: "OUT FOR DELIVERY",
      time: "29 May 2026, 09:15 AM",
      icon: MapPin,
      isCompleted: true,
    },
    {
      title: "DELIVERED",
      time: "29 May 2026, 02:45 PM",
      icon: CheckCircle2,
      isCompleted: true,
      isDelivered: true,
    },
  ];

  return (
    <S.PageWrapper>
      <S.Container>
        {/* Breadcrumb Nav */}
        <S.BreadcrumbNav>
          <Link to="/orders">ORDERS</Link>
          <span className="separator">&gt;</span>
          <Link to={`/orders/${orderData.id}/track`}>ORDER #{orderData.id}</Link>
          <span className="separator">&gt;</span>
          <span className="current">TRACK ORDER</span>
        </S.BreadcrumbNav>

        {/* Title Header */}
        <S.HeaderSection>
          <S.Title>TRACK ORDER</S.Title>
          <S.Subtitle>Stay updated with your order status in real-time.</S.Subtitle>
        </S.HeaderSection>

        {/* Top Overview Card */}
        <S.TopOverviewCard>
          <S.OverviewGrid>
            {/* Col 1 */}
            <S.MetaGroup>
              <S.MetaLabel>ORDER ID</S.MetaLabel>
              <S.MetaValue>#{orderData.id}</S.MetaValue>

              <div style={{ height: "8px" }} />

              <S.MetaLabel>ORDER PLACED</S.MetaLabel>
              <S.MetaValue>{liveTimeline.placedDateIST}</S.MetaValue>

              <div style={{ height: "4px" }} />

              <Link
                to="/orders"
                style={{
                  color: "#FF1F1F",
                  fontSize: "13px",
                  fontWeight: 800,
                  textDecoration: "none",
                }}
              >
                View Order Details &gt;
              </Link>
            </S.MetaGroup>

            {/* Col 2: Product Image directly from backend */}
            <S.ProductInfoGroup>
              <S.ProductImageLarge
                src={orderData.image}
                alt={orderData.product_title}
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=200&q=80";
                }}
              />
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <span
                  style={{
                    color: "#FFFFFF",
                    fontSize: "16px",
                    fontWeight: 800,
                    textTransform: "uppercase",
                  }}
                >
                  {orderData.product_title}
                </span>
                <span style={{ color: "#8D8D94", fontSize: "13px" }}>
                  {orderData.variant}
                </span>
                <span
                  style={{
                    backgroundColor: "#1D2025",
                    color: "#8D8D94",
                    fontSize: "12px",
                    fontWeight: 700,
                    padding: "3px 12px",
                    borderRadius: "999px",
                    width: "fit-content",
                    marginTop: "4px",
                  }}
                >
                  Qty: {orderData.quantity}
                </span>
              </div>
            </S.ProductInfoGroup>

            {/* Col 3 */}
            <S.MetaGroup>
              <S.MetaLabel>DELIVERING TO</S.MetaLabel>
              <S.AddressMetaGroup>
                <b>Venu</b>
                <span>8438968944</span>
                <span>jfdkjgdbkjd</span>
                <span>puttur, andhrapradesh - 517583</span>
              </S.AddressMetaGroup>
            </S.MetaGroup>

            {/* Col 4 */}
            <S.MetaGroup>
              <S.MetaLabel>STATUS</S.MetaLabel>
              <StatusBadge status={orderData.status} />

              <div style={{ height: "8px" }} />

              <S.MetaLabel>DELIVERED ON</S.MetaLabel>
              <S.MetaValue>{liveTimeline.expectedDeliveryIST}</S.MetaValue>

              <div style={{ height: "4px" }} />

              <S.MetaLabel>COURIER PARTNER</S.MetaLabel>
              <S.MetaValue>{orderData.courier}</S.MetaValue>
            </S.MetaGroup>
          </S.OverviewGrid>
        </S.TopOverviewCard>

        {/* 5 Steps Horizontal Timeline Card */}
        <S.TimelineCard>
          <S.TimelineTrack>
            {liveTimeline.steps.map((step, idx) => {
              const iconMap = [ShoppingBag, Package, Truck, MapPin, CheckCircle2];
              const IconComp = iconMap[idx] || CheckCircle2;
              return (
                <S.TimelineStepItem key={step.title}>
                  {idx < liveTimeline.steps.length - 1 && (
                    <S.StepConnectorLine isCompleted={liveTimeline.steps[idx + 1].isCompleted} />
                  )}

                  <S.StepCircle
                    isCompleted={step.isCompleted}
                    isDelivered={step.isDelivered}
                  >
                    <IconComp size={20} />
                  </S.StepCircle>

                  <S.StepTextGroup>
                    <S.StepTitle isCompleted={step.isCompleted}>
                      {step.title}
                    </S.StepTitle>
                    <S.StepTime>{step.time}</S.StepTime>
                  </S.StepTextGroup>
                </S.TimelineStepItem>
              );
            })}
          </S.TimelineTrack>
        </S.TimelineCard>

        {/* Information Grid + Order Summary */}
        <S.SplitInfoGrid>
          {/* 3 Info Cards */}
          <S.InfoCardGrid>
            {/* Card 1: Delivery Address */}
            <S.InfoBlock>
              <S.InfoBlockHeader>
                <S.InfoIconCircle>
                  <MapPin size={20} />
                </S.InfoIconCircle>
                <S.InfoTitle>Delivery Address</S.InfoTitle>
              </S.InfoBlockHeader>
              <S.InfoContent>
                <b>Venu</b>
                <br />
                8438968944
                <br />
                jfdkjgdbkjd
                <br />
                puttur, andhrapradesh - 517583
              </S.InfoContent>
            </S.InfoBlock>

            {/* Card 2: Courier Partner */}
            <S.InfoBlock>
              <S.InfoBlockHeader>
                <S.InfoIconCircle>
                  <Truck size={20} />
                </S.InfoIconCircle>
                <S.InfoTitle>Courier Partner</S.InfoTitle>
              </S.InfoBlockHeader>
              <S.InfoContent>
                <b>{orderData.courier}</b>
                <br />
                <br />
                Tracking ID
                <br />
                <b>{orderData.tracking_id}</b>{" "}
                <S.CopyButton type="button" onClick={handleCopyTracking} title="Copy Tracking ID">
                  {copied ? <Check size={14} color="#22C55E" /> : <Copy size={14} />}
                </S.CopyButton>
              </S.InfoContent>
            </S.InfoBlock>

            {/* Card 3: Estimated Delivery */}
            <S.InfoBlock>
              <S.InfoBlockHeader>
                <S.InfoIconCircle>
                  <Calendar size={20} />
                </S.InfoIconCircle>
                <S.InfoTitle>Estimated Delivery</S.InfoTitle>
              </S.InfoBlockHeader>
              <S.InfoContent>
                <span className="green-text">{liveTimeline.expectedDeliveryShortIST}</span>
                <br />
                <br />
                Actual Delivery
                <br />
                <span className="green-text">{liveTimeline.actualDeliveryDateTimeIST}</span>
              </S.InfoContent>
            </S.InfoBlock>
          </S.InfoCardGrid>

          {/* Right: Order Summary */}
          <S.SummaryCard>
            <S.SummaryTitle>ORDER SUMMARY</S.SummaryTitle>

            <S.SummaryRow>
              <span>Subtotal</span>
              <S.SummaryValue>{formatPrice(orderData.total_price)}</S.SummaryValue>
            </S.SummaryRow>

            <S.SummaryRow>
              <span>Shipping</span>
              <S.FreeShipping>FREE</S.FreeShipping>
            </S.SummaryRow>

            <S.TotalRow>
              <S.TotalLabel>TOTAL</S.TotalLabel>
              <S.TotalAmount>{formatPrice(orderData.total_price)}</S.TotalAmount>
            </S.TotalRow>

            <S.BuyAgainButton type="button" onClick={handleBuyAgain}>
              <RotateCcw size={16} />
              BUY AGAIN
            </S.BuyAgainButton>
          </S.SummaryCard>
        </S.SplitInfoGrid>

        {/* Bottom Full Width Card: ORDER ITEMS */}
        <S.OrderItemsCard>
          <span
            style={{
              color: "#FFFFFF",
              fontSize: "14px",
              fontWeight: 800,
              textTransform: "uppercase",
              display: "block",
              marginBottom: "16px",
              letterSpacing: "0.5px",
            }}
          >
            ORDER ITEMS
          </span>

          <S.ItemRow>
            <S.ItemMetaGroup>
              <S.ItemImage
                src={orderData.image}
                alt={orderData.product_title}
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=200&q=80";
                }}
              />
              <S.ItemDetails>
                <S.ItemName>{orderData.product_title}</S.ItemName>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <S.ItemVariant>{orderData.variant}</S.ItemVariant>
                  <span
                    style={{
                      backgroundColor: "#1D2025",
                      color: "#8D8D94",
                      fontSize: "11px",
                      fontWeight: 700,
                      padding: "2px 8px",
                      borderRadius: "999px",
                    }}
                  >
                    Qty: {orderData.quantity}
                  </span>
                </div>
              </S.ItemDetails>
            </S.ItemMetaGroup>

            <S.ItemPrice>{formatPrice(orderData.total_price)}</S.ItemPrice>
          </S.ItemRow>
        </S.OrderItemsCard>
      </S.Container>
    </S.PageWrapper>
  );
}
