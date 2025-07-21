import { useQueryClient, useMutation } from "@tanstack/react-query";
import { deleteUser } from "../apiCalls";

export const useDeleteUser = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (userID: string) => deleteUser(userID),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['users']})
        },
        onError: (error) => {
            console.error(error.message);
        }
    })
}