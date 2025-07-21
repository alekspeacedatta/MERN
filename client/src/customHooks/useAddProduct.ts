import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProduct } from "../apiCalls";
interface ProductType {
    name: string,
    price: number,
}
export const useaddProduct = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({name, price} : ProductType) => addProduct(name, price),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users'] })
        },
        onError: (error) => {
            console.error("Error While Adding User", error.message);
        }
    })
}