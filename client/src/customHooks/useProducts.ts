import { fetchProducts } from "../apiCalls";
import { useQuery } from "@tanstack/react-query";

export const useProducts = () => {
    return useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts
    })
}