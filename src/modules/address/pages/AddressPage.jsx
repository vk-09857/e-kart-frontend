import { useNavigate } from "react-router-dom";
import {
  MapPin,
  User,
  Phone,
  Building,
  Map,
  Mail,
  Edit,
  Plus,
  Shield,
  Truck,
  BadgeCheck,
  Headphones,
  ArrowRight,
  Save,
  Trash2,
  CheckCircle2,
} from "lucide-react";
import { toast } from "sonner";
import * as S from "../styles/AddressPage.styles";
import { useAddress } from "../hooks/useAddress";
import { useCartQuery } from "../../cart/hooks/api/useCartQuery";

export default function AddressPage() {
  const navigate = useNavigate();
  const {
    addresses,
    isLoading,
    selectedAddressId,
    selectedAddress,
    selectAddress,
    editingAddressId,
    startEditAddress,
    formData,
    handleInputChange,
    resetForm,
    handleSubmit,
    isSaving,
    deleteAddress,
  } = useAddress();

  const { data: cartItems = [] } = useCartQuery();

  // Fallback demo cart items if user arrives directly with an empty cart
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

  const handleContinueToPayment = () => {
    if (!selectedAddress) {
      toast.error("Please select or add a delivery address to continue");
      return;
    }
    localStorage.setItem("selected_address", JSON.stringify(selectedAddress));
    toast.success("Address confirmed! Proceeding to payment...");
    navigate("/payment");
  };

  const formatPrice = (val) => {
    return `₹${Number(val).toLocaleString("en-IN")}`;
  };

  return (
    <S.PageWrapper>
      <S.Container>
        {/* Header Section */}
        <S.HeaderSection>
          <S.Title>DELIVERY ADDRESS</S.Title>
          <S.Subtitle>
            Add or select a delivery address to continue to payment.
          </S.Subtitle>
        </S.HeaderSection>

        {/* Main 3-Column Layout */}
        <S.MainGrid>
          {/* Column 1: SAVED ADDRESSES */}
          <S.Column>
            <S.ColumnTitle>SAVED ADDRESSES</S.ColumnTitle>

            {isLoading ? (
              <S.Card>
                <p style={{ color: "#8B8B94", textAlign: "center" }}>
                  Loading saved addresses...
                </p>
              </S.Card>
            ) : addresses.length === 0 ? (
              <S.EmptyAddressesText>
                No saved addresses found. Please add a new address to continue.
              </S.EmptyAddressesText>
            ) : (
              addresses.map((addr, idx) => {
                const isSelected = selectedAddressId === addr.id;
                return (
                  <S.SavedAddressCard
                    key={addr.id}
                    isSelected={isSelected}
                    onClick={() => selectAddress(addr)}
                  >
                    <S.AddressCardHeader>
                      <S.RadioWrapper>
                        <S.CustomRadio isSelected={isSelected}>
                          <S.RadioDot isSelected={isSelected} />
                        </S.CustomRadio>
                        <S.CustomerName>{addr.full_name}</S.CustomerName>
                      </S.RadioWrapper>

                      {idx === 0 && <S.DefaultBadge>DEFAULT</S.DefaultBadge>}
                    </S.AddressCardHeader>

                    <S.AddressDetails>
                      <S.AddressDetailRow>
                        <Phone size={16} />
                        <span>{addr.phone}</span>
                      </S.AddressDetailRow>

                      <S.AddressDetailRow>
                        <MapPin size={16} />
                        <span>{addr.address_line}</span>
                      </S.AddressDetailRow>

                      <S.AddressDetailRow>
                        <Building size={16} />
                        <span>
                          {addr.city}, {addr.state}
                        </span>
                      </S.AddressDetailRow>

                      <S.AddressDetailRow>
                        <Mail size={16} />
                        <span>{addr.pincode}</span>
                      </S.AddressDetailRow>
                    </S.AddressDetails>

                    <S.CardDivider />

                    <S.CardActionRow>
                      <S.EditButton
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          startEditAddress(addr);
                        }}
                      >
                        <Edit size={14} />
                        EDIT ADDRESS
                      </S.EditButton>

                      <S.DeleteIconButton
                        type="button"
                        title="Delete Address"
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteAddress(addr.id);
                        }}
                      >
                        <Trash2 size={16} />
                      </S.DeleteIconButton>
                    </S.CardActionRow>
                  </S.SavedAddressCard>
                );
              })
            )}

            {/* Add New Address Trigger Button */}
            <S.AddAddressBtn
              type="button"
              onClick={() => {
                resetForm();
                toast.info("Ready to add a new address");
              }}
            >
              <Plus size={18} />
              ADD NEW ADDRESS
            </S.AddAddressBtn>
          </S.Column>

          {/* Column 2: ADD / EDIT ADDRESS FORM */}
          <S.Column>
            <S.ColumnTitle>
              {editingAddressId ? "EDIT ADDRESS" : "ADD NEW ADDRESS"}
            </S.ColumnTitle>

            <S.Card>
              <S.FormGrid onSubmit={handleSubmit}>
                {/* Full Name & Phone Number */}
                <S.InputGroup>
                  <S.InputWrapper>
                    <S.StyledInput
                      type="text"
                      name="full_name"
                      placeholder="Full Name"
                      value={formData.full_name}
                      onChange={handleInputChange}
                      required
                    />
                    <S.InputIcon>
                      <User size={18} />
                    </S.InputIcon>
                  </S.InputWrapper>
                </S.InputGroup>

                <S.InputGroup>
                  <S.InputWrapper>
                    <S.StyledInput
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                    <S.InputIcon>
                      <Phone size={18} />
                    </S.InputIcon>
                  </S.InputWrapper>
                </S.InputGroup>

                {/* House No., Street, Area */}
                <S.FullWidthCol>
                  <S.InputGroup>
                    <S.InputWrapper>
                      <S.StyledInput
                        type="text"
                        name="address_line"
                        placeholder="House No., Street, Area"
                        value={formData.address_line}
                        onChange={handleInputChange}
                        required
                      />
                      <S.InputIcon>
                        <MapPin size={18} />
                      </S.InputIcon>
                    </S.InputWrapper>
                  </S.InputGroup>
                </S.FullWidthCol>

                {/* City & State */}
                <S.InputGroup>
                  <S.InputWrapper>
                    <S.StyledInput
                      type="text"
                      name="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                    />
                    <S.InputIcon>
                      <Building size={18} />
                    </S.InputIcon>
                  </S.InputWrapper>
                </S.InputGroup>

                <S.InputGroup>
                  <S.InputWrapper>
                    <S.StyledInput
                      type="text"
                      name="state"
                      placeholder="State"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                    />
                    <S.InputIcon>
                      <Map size={18} />
                    </S.InputIcon>
                  </S.InputWrapper>
                </S.InputGroup>

                {/* Pincode */}
                <S.FullWidthCol>
                  <S.InputGroup>
                    <S.InputWrapper>
                      <S.StyledInput
                        type="text"
                        name="pincode"
                        placeholder="Pincode"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        required
                      />
                      <S.InputIcon>
                        <Mail size={18} />
                      </S.InputIcon>
                    </S.InputWrapper>
                  </S.InputGroup>
                </S.FullWidthCol>

                {/* Save / Update Button */}
                <S.FullWidthCol>
                  <S.SaveButton type="submit" disabled={isSaving}>
                    <Save size={18} />
                    {isSaving
                      ? "SAVING..."
                      : editingAddressId
                      ? "UPDATE ADDRESS"
                      : "SAVE ADDRESS"}
                  </S.SaveButton>
                </S.FullWidthCol>
              </S.FormGrid>
            </S.Card>
          </S.Column>

          {/* Column 3: ORDER SUMMARY */}
          <S.SummaryColumnWrapper>
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

                <S.ContinueButton type="button" onClick={handleContinueToPayment}>
                  CONTINUE TO PAYMENT
                  <ArrowRight size={18} />
                </S.ContinueButton>
              </S.OrderSummaryCard>
            </S.Column>
          </S.SummaryColumnWrapper>
        </S.MainGrid>

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