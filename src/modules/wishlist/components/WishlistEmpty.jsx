import * as S from "../styles/WishlistEmpty.styles";
import { useNavigate } from "react-router-dom";
import { ShoppingBag, ChevronRight } from "lucide-react";

export default function WishlistEmpty() {
    const navigate = useNavigate();

    return (
        <S.Container>
            <S.IconWrapper>
                <ShoppingBag size={32} color="#e60000" />
            </S.IconWrapper>

            <S.Title>
                Love a gadget?
            </S.Title>

            <S.Subtitle>
                Add items to your wishlist and shop them later.
            </S.Subtitle>

            <S.Button onClick={() => navigate("/products")}>
                EXPLORE PRODUCTS <ChevronRight size={18} />
            </S.Button>
        </S.Container>
    );
}