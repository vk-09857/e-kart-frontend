import { useQuery } from "@tanstack/react-query";
import { getWishlist } from "./api";

export const WISHLIST_QUERY_KEY = ["wishlist"];

export const useWishlistQuery = () => {
    return useQuery({
        queryKey: WISHLIST_QUERY_KEY,
        queryFn: getWishlist,
        select: (response) => response?.data || [],
        staleTime: 1000 * 60 * 5,
    });
};