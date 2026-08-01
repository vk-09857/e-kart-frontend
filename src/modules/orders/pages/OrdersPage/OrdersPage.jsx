import { useState, useEffect } from "react";
import { ChevronDown, Shield, Truck, BadgeCheck, Headphones } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";
import * as S from "../../styles/OrdersPage.styles";
import OrderCard from "../../components/OrderCard";

import { getLiveISTOrders, formatISTDateString } from "../../../../shared/utils/dateUtils";
import { API_BASE_URL, getImageUrl } from "../../../../lib/apiClient";

export default function OrdersPage() {
  const [activeFilter, setActiveFilter] = useState("ALL ORDERS");
  const [sortBy, setSortBy] = useState("NEWEST");
  const [orders, setOrders] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem("access_token");
      const lastPlacedRaw = localStorage.getItem("last_placed_order");
      let lastPlaced = null;
      if (lastPlacedRaw) {
        try { lastPlaced = JSON.parse(lastPlacedRaw); } catch(e) {}
      }

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
        return "https://res.cloudinary.com/dwdvdags5/image/upload/v1780317112/ekart/cd29pm8b7nslyespb6wi.webp";
      };

      if (!token) {
        const defaultsWithLiveImages = getLiveISTOrders().map((def) => ({
          ...def,
          image: getLatestProdImage(def.product_id, def.product_title, def.image),
        }));
        if (lastPlaced) {
          lastPlaced.image = getLatestProdImage(lastPlaced.product_id, lastPlaced.product_title, lastPlaced.image);
          setOrders([lastPlaced, ...defaultsWithLiveImages]);
        } else {
          setOrders(defaultsWithLiveImages);
        }
        return;
      }

      try {
        setIsLoading(true);
        const response = await axios.get(`${API_BASE_URL}/orders`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (Array.isArray(response.data)) {
          const formatted = response.data.map((item) => {
            const firstProduct = item.products?.[0] || {};
            const title = firstProduct.product_title || "ONEPLUS NORD 2";
            const orderDateObj = item.created_at ? new Date(item.created_at) : new Date();
            const deliveryDateObj = new Date(orderDateObj.getTime() + 3 * 24 * 60 * 60 * 1000);

            const orderStatus = (item.status || "PROCESSING").toUpperCase();
            return {
              id: String(item.order_id || item.id),
              product_id: firstProduct.product_id,
              created_at: formatISTDateString(orderDateObj),
              raw_date: orderDateObj.toISOString(),
              product_title: title,
              variant: "12GB RAM, Standard Variant",
              quantity: firstProduct.quantity || 1,
              price: firstProduct.price || item.total_price || 29999,
              total_price: item.total_price || 29999,
              status: orderStatus,
              delivery_date: orderStatus === "PROCESSING" ? "Processing" : formatISTDateString(deliveryDateObj),
              payment_method: "UPI",
              image: getLatestProdImage(firstProduct.product_id, title, firstProduct.image),
            };
          });

          // Merge with last placed order if not present
          let allList = [...formatted];
          if (lastPlaced) {
            lastPlaced.image = getLatestProdImage(lastPlaced.product_id, lastPlaced.product_title, lastPlaced.image);
            if (!allList.some((o) => String(o.id) === String(lastPlaced.id))) {
              allList.unshift(lastPlaced);
            }
          }
          setOrders(allList);
        } else {
          setOrders([]);
        }
      } catch (err) {
        console.error("Error fetching orders:", err);
        setOrders([]);
      } finally {

        setIsLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const filters = ["ALL ORDERS", "PROCESSING", "SHIPPED", "DELIVERED", "CANCELLED"];

  const filteredOrders = orders
    .filter((order) => {
      if (activeFilter === "ALL ORDERS") return true;
      return order.status?.toUpperCase() === activeFilter;
    })
    .sort((a, b) => {
      const dateA = a.raw_date ? new Date(a.raw_date).getTime() : (Number(a.id) || 0);
      const dateB = b.raw_date ? new Date(b.raw_date).getTime() : (Number(b.id) || 0);
      if (sortBy === "OLDEST") {
        return dateA - dateB;
      }
      // Default: NEWEST first
      return dateB - dateA;
    });

  const handleActionClick = (order, type) => {
    if (type === "buy_again") {
      toast.success(`Added ${order.product_title} back to cart!`);
    } else if (type === "cancel") {
      toast.info(`Order #${order.id} cancellation requested.`);
    }
  };

  return (
    <S.PageWrapper>
      <S.Container>
        {/* Header */}
        <S.HeaderSection>
          <S.Title>ORDER HISTORY</S.Title>
          <S.Subtitle>Track and manage all your orders in one place.</S.Subtitle>
        </S.HeaderSection>

        {/* Filter and Sort Bar */}
        <S.ControlsBar>
          <S.FilterTabsContainer>
            {filters.map((filter) => (
              <S.FilterTab
                key={filter}
                isActive={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </S.FilterTab>
            ))}
          </S.FilterTabsContainer>

          <S.SortContainer>
            <span>SORT BY:</span>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="NEWEST">NEWEST</option>
              <option value="OLDEST">OLDEST</option>
            </select>
            <ChevronDown size={14} />
          </S.SortContainer>
        </S.ControlsBar>

        {/* Order List */}
        <S.OrderList>
          {filteredOrders.length === 0 ? (
            <S.EmptyOrdersCard>
              No orders found for status "{activeFilter}".
            </S.EmptyOrdersCard>
          ) : (
            filteredOrders.map((order, idx) => (
              <OrderCard
                key={`${order.id}-${idx}`}
                order={order}
                onActionClick={handleActionClick}
              />
            ))
          )}
        </S.OrderList>

        {/* Bottom Feature Section */}
        <S.FeatureSection>
          <S.FeatureCard>
            <S.FeatureIconWrapper>
              <Shield size={22} />
            </S.FeatureIconWrapper>
            <S.FeatureTextGroup>
              <S.FeatureTitle>100% Secure</S.FeatureTitle>
              <S.FeatureSubtitle>Safe & secure payments</S.FeatureSubtitle>
            </S.FeatureTextGroup>
          </S.FeatureCard>

          <S.FeatureCard>
            <S.FeatureIconWrapper>
              <Truck size={22} />
            </S.FeatureIconWrapper>
            <S.FeatureTextGroup>
              <S.FeatureTitle>Fast Delivery</S.FeatureTitle>
              <S.FeatureSubtitle>On-time delivery</S.FeatureSubtitle>
            </S.FeatureTextGroup>
          </S.FeatureCard>

          <S.FeatureCard>
            <S.FeatureIconWrapper>
              <BadgeCheck size={22} />
            </S.FeatureIconWrapper>
            <S.FeatureTextGroup>
              <S.FeatureTitle>Best Quality</S.FeatureTitle>
              <S.FeatureSubtitle>Original products</S.FeatureSubtitle>
            </S.FeatureTextGroup>
          </S.FeatureCard>

          <S.FeatureCard>
            <S.FeatureIconWrapper>
              <Headphones size={22} />
            </S.FeatureIconWrapper>
            <S.FeatureTextGroup>
              <S.FeatureTitle>24/7 Support</S.FeatureTitle>
              <S.FeatureSubtitle>We're here to help</S.FeatureSubtitle>
            </S.FeatureTextGroup>
          </S.FeatureCard>
        </S.FeatureSection>
      </S.Container>
    </S.PageWrapper>
  );
}
