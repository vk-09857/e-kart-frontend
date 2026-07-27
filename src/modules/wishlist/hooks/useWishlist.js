import { useCallback, useMemo } from "react";
import { useWishlistQuery } from "../api/useWishlistQuery";
import {
    useAddToWishlistMutation,
    useRemoveFromWishlistMutation,
    useClearWishlistMutation,
    useMoveToCartMutation,
} from "../api/useWishlistMutations";

export const useWishlist = () => {
    const {
        data: wishlistItems = [],
        isLoading,
        isError,
        error,
        refetch,
    } = useWishlistQuery();

    const addToWishlistMutation = useAddToWishlistMutation();
    const removeFromWishlistMutation = useRemoveFromWishlistMutation();
    const clearWishlistMutation = useClearWishlistMutation();
    const moveToCartMutation = useMoveToCartMutation();

    const wishlistCount = useMemo(() => wishlistItems.length, [wishlistItems]);

    const isWishlisted = useCallback(
        (productId) => {
            return wishlistItems.some(
                (item) => item.product_id === productId || item.id === productId
            );
        },
        [wishlistItems]
    );

    const getWishlistId = useCallback(
        (productId) => {
            const found = wishlistItems.find(
                (item) => item.product_id === productId || item.id === productId
            );
            return found ? found.wishlist_id || found.id : null;
        },
        [wishlistItems]
    );

    const addToWishlist = useCallback(
        (productId) => {
            addToWishlistMutation.mutate(productId);
        },
        [addToWishlistMutation]
    );

    const removeFromWishlist = useCallback(
        (wishlistId) => {
            removeFromWishlistMutation.mutate(wishlistId);
        },
        [removeFromWishlistMutation]
    );

    const clearWishlist = useCallback(() => {
        clearWishlistMutation.mutate();
    }, [clearWishlistMutation]);

    const moveToCart = useCallback(
        (item) => {
            const wishlistId = item.wishlist_id || item.id;
            const productId = item.product_id;
            moveToCartMutation.mutate({ wishlistId, productId });
        },
        [moveToCartMutation]
    );

    return {
        wishlistItems,
        wishlistCount,
        isLoading,
        isError,
        error,
        refetch,
        addToWishlist,
        removeFromWishlist,
        clearWishlist,
        moveToCart,
        isWishlisted,
        getWishlistId,
        isAdding: addToWishlistMutation.isPending,
        isRemoving: removeFromWishlistMutation.isPending,
        isClearing: clearWishlistMutation.isPending,
        isMoving: moveToCartMutation.isPending,
    };
};

export default useWishlist;
