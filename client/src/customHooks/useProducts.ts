import { fetchProducts } from "../apiCalls";
import { useQuery } from "@tanstack/react-query";

export const useProducts = (endpoint: string | null) => {
  return useQuery({
    queryKey: ["products", endpoint],
    queryFn: () => fetchProducts(endpoint),
  });
};
