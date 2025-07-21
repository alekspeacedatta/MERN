import { fetchProducts } from "../apiCalls";
import { useQuery } from "@tanstack/react-query";

export const useProducts = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: fetchProducts
    })
}