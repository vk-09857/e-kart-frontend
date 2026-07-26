import * as S from "../styles/WishlistHeader.styles";
import ClearWishlistButton from "./ClearWishlistButton";

export default function WishlistHeader({
    totalItems,
}) {
    return (
        <S.Container>

            <S.Left>

                <S.TitleWrapper>

                    <S.Line />

                    <div>

                        <S.Title>
                            MY WISHLIST
                            <span>♡</span>
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

            <ClearWishlistButton />

        </S.Container>
    );
}