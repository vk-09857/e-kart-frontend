import * as S from "../styles/WishlistItem.styles";
import {
    ShoppingCart,
    Trash2,
    ChevronRight,
} from "lucide-react";

export default function WishlistItem({ item, onMoveToCart, onRemove }) {
    const imageUrl = item.image?.startsWith("http")
        ? item.image
        : item.image
        ? `${import.meta.env.VITE_API_URL}${item.image}`
        : "";

    return (
        <S.Card>

            <S.ImageWrapper>
                {imageUrl ? (
                    <img
                        src={imageUrl}
                        alt={item.product_title}
                    />
                ) : (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#9b9b9b' }}>
                        No Image
                    </div>
                )}
            </S.ImageWrapper>

            <S.Content>

                <S.Category>
                    {item.category || "GADGET"}
                </S.Category>

                <S.Title>
                    {item.product_title}
                </S.Title>

                <S.Description>
                    {item.description || "Premium electronic product"}
                </S.Description>

                <S.Price>
                    ₹{item.price?.toLocaleString()}
                </S.Price>

            </S.Content>

            <S.Stock>

                <S.Dot />

                In Stock

            </S.Stock>

            <S.Actions>
                <S.MoveButton
                    onClick={() => onMoveToCart && onMoveToCart(item)}
                    aria-label={`Move ${item.product_title} to cart`}
                >
                    <ShoppingCart size={18} />
                    Move To Cart
                </S.MoveButton>

                <S.RemoveButton
                    onClick={() => onRemove && onRemove(item.wishlist_id)}
                    aria-label={`Remove ${item.product_title} from wishlist`}
                >
                    <Trash2 size={18} />
                    Remove
                </S.RemoveButton>
            </S.Actions>

            <S.Arrow>

                <ChevronRight size={24} />

            </S.Arrow>

        </S.Card>
    );
}