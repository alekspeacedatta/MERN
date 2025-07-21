import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProduct } from "../apiCalls";
interface UserType {
    name: string,
    price: number,
}
export const useaddProduct = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({name, price} : UserType) => addProduct(name, price),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users'] })
        },
        onError: (error) => {
            console.error("Error While Adding User", error.message);
        }
    })
}