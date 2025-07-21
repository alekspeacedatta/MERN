import { useQueryClient, useMutation } from "@tanstack/react-query";
import { login } from "../apiCalls";

export const useLogin = (options?: {
    onSuccess?: (data: any) => void;
    onError?: (error: any) => void;
}) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ email, password }: { email: string, password: string }) => login(email, password),
        onSuccess: (data) => {
            console.log('login successful', data);
            queryClient.invalidateQueries({ queryKey: ['users'] });
            options?.onSuccess?.(data);
        },
        onError: (error) => {
            console.error(error.message);
            options?.onError?.(error); 
        }
    });
}
