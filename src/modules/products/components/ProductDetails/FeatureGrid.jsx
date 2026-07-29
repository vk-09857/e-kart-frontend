import { Truck, ShieldCheck, RefreshCw, Award } from "lucide-react";
import * as S from "./ProductDetails.styles";

export default function FeatureGrid() {
  const features = [
    {
      icon: Truck,
      title: "Free Delivery",
      subtitle: "Free fast delivery on all orders",
    },
    {
      icon: ShieldCheck,
      title: "Secure Payment",
      subtitle: "100% secure payment",
    },
    {
      icon: RefreshCw,
      title: "Easy Returns",
      subtitle: "14 days easy return policy",
    },
    {
      icon: Award,
      title: "Premium Quality",
      subtitle: "Genuine & original products",
    },
  ];

  return (
    <S.FeatureGridWrapper>
      {features.map((feature) => {
        const IconComp = feature.icon;
        return (
          <S.FeatureCardContainer key={feature.title}>
            <div className="icon-wrapper">
              <IconComp size={22} />
            </div>
            <div className="text-wrapper">
              <span className="title">{feature.title}</span>
              <span className="subtitle">{feature.subtitle}</span>
            </div>
          </S.FeatureCardContainer>
        );
      })}
    </S.FeatureGridWrapper>
  );
}
