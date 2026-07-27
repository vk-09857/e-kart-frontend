import * as S from "../styles/WishlistHeader.styles";
import ClearWishlistButton from "./ClearWishlistButton";
import { Heart } from "lucide-react";

export default function WishlistHeader({
    totalItems = 0,
    onClearClick,
}) {
    return (
        <S.Container>

            <S.Left>

                <S.TitleWrapper>

                    <S.Line />

                    <div>

                        <S.Title>
                            MY WISHLIST
                            <span>
                                <Heart size={32} fill="#e60000" color="#e60000" style={{ display: 'inline-block', verticalAlign: 'middle' }} />
                            </span>
                        </S.Title>

                        <S.Subtitle>
                            Your favorite gadgets, saved for later.
                        </S.Subtitle>

                        <S.Count>
                            <span>{totalItems}</span> Items
                        </S.Count>

                    </div>

                </S.TitleWrapper>

            </S.Left>

            {totalItems > 0 && (
                <ClearWishlistButton onClick={onClearClick} />
            )}

        </S.Container>
    );
}