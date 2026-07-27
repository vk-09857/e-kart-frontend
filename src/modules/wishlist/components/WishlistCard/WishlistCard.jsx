import * as S from "./WishlistCard.styles";
import {
    ShoppingCart,
    Trash2,
    ChevronRight,
} from "lucide-react";

export default function WishlistCard({ item }) {
    return (
        <S.Card>

            <S.ImageSection>
                <S.Image
                    src={item.image}
                    alt={item.product_title}
                />
            </S.ImageSection>

            <S.ContentSection>

                <S.Category>
                    {item.category}
                </S.Category>

                <S.Title>
                    {item.product_title}
                </S.Title>

                <S.Description>
                    Premium electronic product
                </S.Description>

                <S.Price>
                    ₹{item.price.toLocaleString()}
                </S.Price>

            </S.ContentSection>

            <S.RightSection>

                <S.StockSection>
                    <S.StockDot />
                    <span>In Stock</span>
                </S.StockSection>

                <S.ActionSection>

                    <S.MoveButton>
                        <ShoppingCart size={18} />
                        Move To Cart
                    </S.MoveButton>

                    <S.RemoveButton>
                        <Trash2 size={18} />
                        Remove
                    </S.RemoveButton>

                </S.ActionSection>

                <S.ArrowSection>
                    <ChevronRight size={22} />
                </S.ArrowSection>

            </S.RightSection>

        </S.Card>
    );
}