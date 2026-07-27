import { useState } from "react";
import * as S from "../styles/WishlistPage.styles";
import { useWishlist } from "../hooks/useWishlist";
import {
    WishlistHeader,
    WishlistItem,
    WishlistEmpty,
    WishlistSkeleton,
    WishlistError,
    ConfirmModal,
} from "../components";

export default function WishlistPage() {
    const {
        wishlistItems,
        wishlistCount,
        isLoading,
        isError,
        error,
        refetch,
        removeFromWishlist,
        clearWishlist,
        moveToCart,
    } = useWishlist();

    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

    const handleConfirmClear = () => {
        clearWishlist();
        setIsConfirmModalOpen(false);
    };

    if (isLoading) {
        return (
            <S.Page>
                <WishlistHeader totalItems={0} />
                <WishlistSkeleton />
            </S.Page>
        );
    }

    if (isError) {
        return (
            <S.Page>
                <WishlistHeader totalItems={0} />
                <WishlistError error={error} message={error?.message} onRetry={refetch} />
            </S.Page>
        );
    }

    return (
        <S.Page>
            <WishlistHeader
                totalItems={wishlistCount}
                onClearClick={() => setIsConfirmModalOpen(true)}
            />

            {wishlistCount === 0 ? (
                <WishlistEmpty />
            ) : (
                wishlistItems.map((item) => (
                    <WishlistItem
                        key={item.wishlist_id || item.id}
                        item={item}
                        onMoveToCart={moveToCart}
                        onRemove={removeFromWishlist}
                    />
                ))
            )}

            <ConfirmModal
                isOpen={isConfirmModalOpen}
                onClose={() => setIsConfirmModalOpen(false)}
                onConfirm={handleConfirmClear}
                title="Clear Wishlist?"
                message="Are you sure you want to clear your wishlist? This action will remove all saved items."
            />
        </S.Page>
    );
}