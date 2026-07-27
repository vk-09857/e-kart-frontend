import {
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";
import {
    addToWishlist,
    removeFromWishlist,
    clearWishlist,
} from "./api";
import { WISHLIST_QUERY_KEY } from "./useWishlistQuery";
import { CART_QUERY_KEY } from "../../cart/hooks/api/useCartQuery";
import { addToCart } from "../../cart/api/cart.api";

export const useAddToWishlistMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (productId) => addToWishlist(productId),
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: WISHLIST_QUERY_KEY,
            });
            toast.success(
                data?.message || "Product added to wishlist"
            );
        },
        onError: (error) => {
            toast.error(
                error.message || "Failed to add to wishlist"
            );
        },
    });
};

export const useRemoveFromWishlistMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (wishlistId) => removeFromWishlist(wishlistId),
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: WISHLIST_QUERY_KEY,
            });
            toast.success(
                data?.message || "Product removed from wishlist"
            );
        },
        onError: (error) => {
            toast.error(
                error.message || "Failed to remove wishlist item"
            );
        },
    });
};

export const useClearWishlistMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: () => clearWishlist(),
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: WISHLIST_QUERY_KEY,
            });
            toast.success(
                data?.message || "Wishlist cleared successfully"
            );
        },
        onError: (error) => {
            toast.error(
                error.message || "Failed to clear wishlist"
            );
        },
    });
};

export const useMoveToCartMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ wishlistId, productId }) => {
            await addToCart(productId, 1);
            await removeFromWishlist(wishlistId);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: WISHLIST_QUERY_KEY,
            });
            queryClient.invalidateQueries({
                queryKey: CART_QUERY_KEY,
            });
            toast.success("Item moved to cart successfully");
        },
        onError: (error) => {
            toast.error(
                error.message || "Failed to move item to cart"
            );
        },
    });
};