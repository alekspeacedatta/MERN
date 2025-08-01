import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProduct } from "../apiCalls";
interface ProductType {
  name: string;
  price: number;
  endpoint: string | null;
}
export const useAddProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ name, price, endpoint }: ProductType) =>
      addProduct(name, price, endpoint),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: (error) => {
      console.error("Error While Adding User", error.message);
    },
  });
};
