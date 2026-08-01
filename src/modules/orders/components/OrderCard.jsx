import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, RotateCcw, Truck, XCircle } from "lucide-react";
import StatusBadge from "./StatusBadge";
import * as S from "../styles/OrdersPage.styles";
import { getImageUrl } from "../../../lib/apiClient";

export default function OrderCard({ order, onActionClick }) {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/orders/${order.id}/track`, { state: { order } });
  };

  const getActionButton = () => {
    const status = (order.status || "DELIVERED").toUpperCase();
    if (status === "DELIVERED") {
      return (
        <S.OrderActionBtn onClick={() => onActionClick?.(order, "buy_again")}>
          <RotateCcw size={16} />
          BUY AGAIN
        </S.OrderActionBtn>
      );
    }
    if (status === "SHIPPED") {
      return (
        <S.OrderActionBtn onClick={() => navigate(`/orders/${order.id}/track`, { state: { order } })}>
          <Truck size={16} />
          TRACK ORDER
        </S.OrderActionBtn>
      );
    }
    if (status === "PROCESSING") {
      return (
        <S.OrderActionBtn onClick={() => onActionClick?.(order, "cancel")}>
          <XCircle size={16} />
          CANCEL ORDER
        </S.OrderActionBtn>
      );
    }
    return (
      <S.OrderActionBtn onClick={handleViewDetails}>
        VIEW DETAILS
      </S.OrderActionBtn>
    );
  };

  const formatPrice = (price) => {
    return `₹${Number(price).toLocaleString("en-IN")}`;
  };

  return (
    <S.OrderCard>
      <S.OrderCardGrid>
        {/* Column 1: Order Info */}
        <S.InfoColumn>
          <S.MetaGroup>
            <S.MetaLabel>ORDER ID</S.MetaLabel>
            <S.MetaValue>#{order.id}</S.MetaValue>
          </S.MetaGroup>

          <S.MetaGroup>
            <S.MetaLabel>ORDER PLACED</S.MetaLabel>
            <S.MetaValue>{order.created_at || order.placed_date || "26/05/2026"}</S.MetaValue>
          </S.MetaGroup>

          <S.ViewDetailsLink onClick={handleViewDetails}>
            View Details
            <ChevronRight size={14} />
          </S.ViewDetailsLink>
        </S.InfoColumn>

        {/* Column 2: Product info */}
        <S.ProductColumn>
          <S.ProductImage
            src={getImageUrl(order.image) || "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=300&q=80"}
            alt={order.product_title || "Product"}
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=200&q=80";
            }}
          />
          <S.ProductMetaGroup>
            <S.ProductName>{order.product_title || "IPHONE 15 PRO"}</S.ProductName>
            <S.ProductVariant>{order.variant || "256GB, Natural Titanium"}</S.ProductVariant>
            <S.QtyBadge>Qty: {order.quantity || 1}</S.QtyBadge>
          </S.ProductMetaGroup>
        </S.ProductColumn>

        {/* Column 3: Status & Payment */}
        <S.StatusColumn>
          <S.MetaGroup>
            <S.MetaLabel>STATUS</S.MetaLabel>
            <StatusBadge status={order.status} />
          </S.MetaGroup>

          <S.MetaGroup>
            <S.MetaLabel>
              {order.status?.toUpperCase() === "DELIVERED" ? "DELIVERED ON" : "EXPECTED DELIVERY"}
            </S.MetaLabel>
            <S.MetaValue>{order.delivery_date || "29/05/2026"}</S.MetaValue>
          </S.MetaGroup>

          <S.MetaGroup>
            <S.MetaLabel>PAYMENT METHOD</S.MetaLabel>
            <S.MetaValue>{order.payment_method || "UPI"}</S.MetaValue>
          </S.MetaGroup>
        </S.StatusColumn>

        {/* Column 4: Total & Action */}
        <S.ActionColumn>
          <S.MetaGroup>
            <S.MetaLabel>TOTAL AMOUNT</S.MetaLabel>
            <S.MetaValue style={{ fontSize: "20px" }}>
              {formatPrice(order.total_price || 119998)}
            </S.MetaValue>
          </S.MetaGroup>

          {getActionButton()}
        </S.ActionColumn>
      </S.OrderCardGrid>
    </S.OrderCard>
  );
}
