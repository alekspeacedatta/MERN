import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addUser } from "../apiCalls";
interface UserType {
    name: string,
    age: string,
}
export const useaddUser = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({name, age} : UserType) => addUser(name, age),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users'] })
        },
        onError: (error) => {
            console.error("Error While Adding User", error.message);
        }
    })
}