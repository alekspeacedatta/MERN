import { register } from "../apiCalls";
import { useQueryClient, useMutation } from "@tanstack/react-query";
interface UserType {
  name: string;
  email: string;
  password: string;
}
export const useRegister = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ name, email, password }: UserType) =>
      register(name, email, password),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error) => {
      console.error(error.message);
    },
  });
};