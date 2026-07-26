import * as S from "../styles/WishlistEmpty.styles";

export default function WishlistEmpty() {
    return (
        <S.Container>
            <S.Icon>♡</S.Icon>

            <S.Title>
                Love a gadget?
            </S.Title>

            <S.Subtitle>
                Add items to your wishlist and shop them later.
            </S.Subtitle>

            <S.Button>
                Explore Products
            </S.Button>
        </S.Container>
    );
}