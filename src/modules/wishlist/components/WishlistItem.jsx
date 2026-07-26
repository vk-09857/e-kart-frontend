import * as S from "../styles/WishlistItem.styles";
import {
    ShoppingCart,
    Trash2,
    ChevronRight,
} from "lucide-react";

export default function WishlistItem({ item }) {
    return (
        <S.Card>

            <S.ImageWrapper>
                <img
                    src={item.image}
                    alt={item.product_title}
                />
            </S.ImageWrapper>

            <S.Content>

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

            </S.Content>

            <S.Stock>

                <S.Dot />

                In Stock

            </S.Stock>

            <S.MoveButton>

                <ShoppingCart size={18} />

                Move To Cart

            </S.MoveButton>

            <S.RemoveButton>

                <Trash2 size={18} />

                Remove

            </S.RemoveButton>

            <S.Arrow>

                <ChevronRight size={24} />

            </S.Arrow>

        </S.Card>
    );
}