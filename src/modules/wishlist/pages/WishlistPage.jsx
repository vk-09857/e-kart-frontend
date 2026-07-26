import * as S from "../styles/WishlistPage.styles";

import { useWishlistQuery } from "../api/useWishlistQuery";

import {
    WishlistHeader,
    WishlistItem,
    WishlistEmpty,
} from "../components";

export default function WishlistPage() {

    const { data: wishlistItems = [] } = useWishlistQuery();

    return (
        <S.Page>

            <WishlistHeader
                totalItems={wishlistItems.length}
            />

            {wishlistItems.length === 0 ? (

                <WishlistEmpty />

            ) : (

                wishlistItems.map((item) => (

                    <WishlistItem
                        key={item.wishlist_id}
                        item={item}
                    />

                ))

            )}

        </S.Page>
    );
}