import { useQueryClient, useMutation } from "@tanstack/react-query";
import { deleteProduct } from "../apiCalls";

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (userID: string) => deleteProduct(userID),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: (error) => {
      console.error(error.message);
    },
  });
};
