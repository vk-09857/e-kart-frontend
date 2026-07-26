import {
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import { toast } from "sonner";

import {
    addToWishlist,
    removeFromWishlist,
} from "./api";

import {
    WISHLIST_QUERY_KEY,
} from "./useWishlistQuery";

export const useAddToWishlistMutation = () => {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: (productId) =>
            addToWishlist(productId),

        onSuccess: (data) => {

            queryClient.invalidateQueries({
                queryKey: WISHLIST_QUERY_KEY,
            });

            toast.success(
                data?.message ||
                "Product added to wishlist"
            );
        },

        onError: (error) => {

            toast.error(
                error.message ||
                "Failed to add to wishlist"
            );

        },

    });

};

export const useRemoveFromWishlistMutation = () => {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: (wishlistId) =>
            removeFromWishlist(wishlistId),

        onSuccess: (data) => {

            queryClient.invalidateQueries({
                queryKey: WISHLIST_QUERY_KEY,
            });

            toast.success(
                data?.message ||
                "Product removed from wishlist"
            );

        },

        onError: (error) => {

            toast.error(
                error.message ||
                "Failed to remove wishlist item"
            );

        },

    });

};