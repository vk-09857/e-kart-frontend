import { apiClient } from "../../../lib/apiClient";

export const getWishlist = async () => {
    return await apiClient("/wishlist", {
        method: "GET",
    });
};

export const addToWishlist = async (productId) => {
    return await apiClient("/wishlist", {
        method: "POST",
        body: {
            product_id: productId,
        },
    });
};

export const removeFromWishlist = async (wishlistId) => {
    return await apiClient(`/wishlist/${wishlistId}`, {
        method: "DELETE",
    });
};

export const removeFromWishlistByProductId = async (productId) => {
    return await apiClient(`/wishlist/product/${productId}`, {
        method: "DELETE",
    });
};

export const clearWishlist = async () => {
    return await apiClient("/wishlist", {
        method: "DELETE",
    });
};